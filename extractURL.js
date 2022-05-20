function domainName(url) {
    let domain = url.replace('http://', '');
    domain = domain.replace(/\..*/, '');
    return domain;
}

console.log(domainName("http://google.com"));
