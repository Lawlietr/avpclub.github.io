# AVPClub - 隱私優先的 DNS over HTTPS 服務

歡迎使用 doh.avpclub.uk，這是一個專注於隱私保護的公共 DNS 伺服器。我們提供 DNS over HTTPS (DoH) 服務，並且**絕不記錄任何使用者的 DNS 查詢紀錄**，確保您的網路活動完全私密。

## DNS 請求處理

所有 DNS 請求都會通過加密通道轉發至上游伺服器 `tls://1dot1dot1dot1.cloudflare-dns.com`，確保您的查詢安全且快速。

## 隱私保護

我們承諾**不記錄任何 DNS 查詢紀錄**。您的隱私是我們的首要任務，我們不會收集、存儲或分享任何與您相關的數據。

## 支援的 DNS 加密協議

我們目前支援 **DNS over HTTPS (DoH)**，您可以使用以下地址進行連接：
```
https://doh.avpclub.uk/dns-query
```

## 過濾器規則清單

我們使用以下過濾器規則來阻擋廣告、惡意軟體和其他不必要的內容：

- [AdGuard Simplified Domain Names filter](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt)
- [1hos.cf Mini Filter](https://1hos.cf/mini/)
- [StevenBlack's Hosts](https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts)
- [dns-blocklists](https://raw.githubusercontent.com/vokins/yhosts/master/hosts)
- [Peter Lowe's Adservers](https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext)
- [TW165-redirect](https://filter.futa.gg/TW165-redirect.txt)
- [futa hosts_abp](https://filter.futa.gg/hosts_abp.txt)

## 白名單 (Whitelist)

以下域名已被列入白名單，確保它們不會被過濾器阻擋：

```
（目前無白名單項目）
```

## 黑名單 (Blacklist)

以下域名已被列入黑名單，它們會被過濾器阻擋：

```
api.mousegesturesapi.com
```

## 如何開始使用

要使用我們的 DNS over HTTPS 服務，請將您的設備或瀏覽器的 DNS 設置更改為：
```
https://doh.avpclub.uk/dns-query
```

如需詳細設置指南，請參考您的設備或瀏覽器的官方文檔。

## 聯繫與反饋

如果您有任何問題或建議，請通過 [dns.github@slmail.me](mailto:dns.github.armored046@slmail.me) 聯繫我們。
