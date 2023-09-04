import os
import json
from azure.cosmos import CosmosClient, exceptions

# Get secrets from Git, exit if any is missing
try:
    COSMOS_KEY = os.environ["COSMOS_KEY"]
    COSMOS_DB_NAME = os.environ["COSMOS_DB_NAME"]
    COSMOS_DB_URI = os.environ["COSMOS_DB_URI"]
    WORKSPACE = os.environ["WORKSPACE"]
except KeyError as k:
    print(f"Missing key. Error", k, "Job will exit and not complete")
    raise

# Add new containers to the list
containers = [
    "renovate",
    "paloalto",
    "helmcharts",
    "docsoutdated"
]

try:
    # Connect to cosmos
    client = CosmosClient(COSMOS_DB_URI, COSMOS_KEY)
    database = client.get_database_client(COSMOS_DB_NAME)

    # Read all records from container
    for container in containers:
        reports = []
        db_container = database.get_container_client(container)

        for item in db_container.query_items(
                query='SELECT * FROM c',
                enable_cross_partition_query=True):
            # Remove cosmosdb specific properties, not needed
            for key in ["_rid", "_self", "_etag", "_attachments", "_ts"]:
                item.pop(key, None)

            reports.append(item)

        # Save json data to the public/reports folder
        file_name = f"public/reports/{container}.json"
        with open(file_name, 'w') as report_file:
            json.dump(reports, report_file, indent=4)

        print(f"Done writing JSON data into file: {file_name}")

except exceptions.CosmosHttpResponseError as http_response_error:
    print(f"Saving to file from db failed with CosmosHttpResponseError error: {http_response_error}")
    raise

# Done? let us know
print(f"Save to report files completed for {containers}.")
