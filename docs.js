module.exports = {
    "name": "countUniqueUrlsPerTopLevelDomain",
    "description": "This function counts how many unique normalized valid URLs were passed to the function per top level domain",
    "input": {
      "type": "string",
      "description": "List of URLs to analyze",
      "example": "https://example.com, https://subdomain.example.com"
    },
    "output": {
      "type": "string",
      "description": "A map of top-level domains and their counts",
      "example": "{example.com : 2}"
    }
}
