import json

from file_helper import find_image_urls
from github_helper import (
    get_latest_commit_at,
    get_rate_limit,
    get_readme_file,
    list_repository_image_urls,
    search_repositories,
)
from s3_helper import upload_file

if __name__ == "__main__":
    repositories, total_count = search_repositories()
    print("Total repo count:", total_count)

    for index, repository in enumerate(repositories):
        repository["readme"] = get_readme_file(repository)
        readme_image_urls = find_image_urls(repository["readme"])

        repository_image_urls = list_repository_image_urls(repository)

        repository["image_urls"] = readme_image_urls + repository_image_urls

        repository["latest_commit_at"] = get_latest_commit_at(repository)

        file_name = f"{repository['owner']['name']}/{repository['name']}.json"
        upload_file(file_name, json.dumps(repository))
