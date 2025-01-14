# AVPClub - Privacy-First DNS over HTTPS Service

Welcome to doh.avpclub.uk, a public DNS server focused on privacy protection. We provide DNS over HTTPS (DoH) service and **never log any user DNS query records**, ensuring your network activities remain completely private.

## DNS Request Processing
All DNS requests are forwarded through an encrypted channel to the upstream server `tls://1dot1dot1dot1.cloudflare-dns.com`, ensuring your queries are secure and fast.

## Privacy Protection
We commit to **not logging any DNS query records**. Your privacy is our top priority, and we do not collect, store, or share any data related to you.

## Supported DNS Encryption Protocols
We currently support **DNS over HTTPS (DoH)**. You can connect using the following address:
```
https://doh.avpclub.uk/dns-query
```

## Filter Rules List
We use the following filter rules to block advertisements, malware, and other unwanted content:
- [AdGuard Simplified Domain Names filter](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt)
- [1hos.cf Mini Filter](https://1hos.cf/mini/)
- [StevenBlack's Hosts](https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts)
- [dns-blocklists](https://raw.githubusercontent.com/vokins/yhosts/master/hosts)
- [Peter Lowe's Adservers](https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext)
- [TW165-redirect](https://filter.futa.gg/TW165-redirect.txt)
- [futa hosts_abp](https://filter.futa.gg/hosts_abp.txt)

## Whitelist
The following domains are whitelisted to ensure they are not blocked by filters:
```
(Currently no whitelist entries)
```

## Blacklist
The following domains are blacklisted and will be blocked by filters:
```
api.mousegesturesapi.com
```

## How to Start Using
To use our DNS over HTTPS service, change your device or browser's DNS settings to:
```
https://doh.avpclub.uk/dns-query
```
For detailed setup instructions, please refer to your device or browser's official documentation.

## Contact and Feedback
If you have any questions or suggestions, please contact us at [dns.github@slmail.me](mailto:dns.github.armored046@slmail.me).
