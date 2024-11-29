const data = require('../docs');

exports.getTopLevelDomain = async(req, res) => {
    res.send(data);
};

exports.postTopLevelDomain = async(req, res) => {
    try {
        const {input} = req.body;
        const convertArray = input.split(',').map(url => url.trim());
        const output = countUniqueUrlsPerTopLevelDomain(convertArray)
        res.send({output});
    } catch(e) {
        res.send({msg: "Error"})
    }
};


/**
     * This function counts how many unique normalized valid URLs were passed to the function per top level domain
     *
     * A top level domain is a domain in the form of example.com. Assume all top level domains end in .com
     * subdomain.example.com is not a top level domain.
     *
     * Accepts a list of URLs
     *
     * Example:
     *
     * input: ["https://example.com"]
     * output: ["example.com" => 1]
     *
     * input: ["https://example.com", "https://subdomain.example.com"]
     * output: ["example.com" => 2]
     *
     */
    /* @var $urls : string[] */
    const countUniqueUrlsPerTopLevelDomain = (urls) => {
        const topLevelDomainCounts = {};
      
        urls.forEach((url) => {
          try {
            // Normalize URL by removing any trailing slashes
            const normalizedUrl = new URL(url).origin;
      
            // Extract host (domain)
            const host = normalizedUrl.replace(/^https?:\/\//, '').replace(/^www\./, '');
      
            // Split the host into parts (subdomains, domain, TLD)
            const parts = host.split('.');
      
            // Extract the top-level domain (TLD)
            const tld = parts.slice(-2).join('.');
      
            // Count unique URLs per TLD
            if (topLevelDomainCounts[tld]) {
              topLevelDomainCounts[tld] += 1;
            } else {
              topLevelDomainCounts[tld] = 1;
            }
          } catch (error) {
            // Skip invalid URLs
            console.error("Invalid URL:", url);
          }
        });
      
        return topLevelDomainCounts;
    };