# DNS 服務資訊

## 1. DNS 伺服器設定
- **DNS over HTTPS**: [https://doh.avpclub.uk/dns-query]

### 服務說明
- **基於 AdGuard Home 服務**  
  The service is based on AdGuard Home.

- **DNS 請求處理**  
  本服務收到的 DNS 請求，會全部轉發至上游 `tls://1dot1dot1dot1.cloudflare-dns.com`。  
  All received DNS query requests will be forwarded to `tls://1dot1dot1dot1.cloudflare-dns.com`.

- **隱私保護**  
  目前已不再紀錄任何 DNS 查詢結果。  
  The service will not record any DNS queries now.

---

## 2. 支援的 DNS 加密協議
- 支援 **DNS over HTTPS (DoH)** 和 **DNS over TLS (DoT)**，使用 `adh.avpclub.gq`。

---

## 3. 目前使用的過濾器規則
以下是目前使用的過濾器規則清單：

- **AdGuard Simplified Domain Names filter**  
  [https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt](https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt)

- **1hos.cf Mini Filter**  
  [https://1hos.cf/mini/](https://1hos.cf/mini/)

- **StevenBlack's Hosts**  
  [https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts](https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts)

- **yhosts**  
  [https://raw.githubusercontent.com/vokins/yhosts/master/hosts](https://raw.githubusercontent.com/vokins/yhosts/master/hosts)

- **Peter Lowe's Adservers**  
  [https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext](https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=0&mimetype=plaintext)

- **CoinBlockerLists**  
  [https://gitlab.com/ZeroDot1/CoinBlockerLists/raw/master/hosts_browser](https://gitlab.com/ZeroDot1/CoinBlockerLists/raw/master/hosts_browser)

---

## 4. 自建黑白名單
以下是自建的白名單與黑名單規則：

### 白名單 (Whitelist)
```plaintext
@@||1hosts.cf^
@@||adaway.org^
@@||b-api.facebook.com^
@@||cdn.taboola.com^
@@||click.simba.taobao.com^
@@||count.taobao.com^
@@||dailyupdate.wangwang.taobao.com^
@@||ebc.net.tw^
@@||filters.adtidy.org^
@@||graph.facebook.com^
@@||h-adashx.ut.taobao.com^
@@||hosts-file.net^
@@||i.click.taobao.com^
@@||ju.taobao.com^
@@||m.taobao.com^
@@||mirror1.malwaredomains.com^
@@||mmstat.com^
@@||mos.m.taobao.com^
@@||mqtt-mini.facebook.com^
@@||mtop.subaru.pc.mini.detail^
@@||news.ebc.net.tw^
@@||passport.baidu.com^
@@||pgl.yoyo.org^
@@||raw.githubusercontent.com^
@@||s.click.taobao.com^
@@||s3.amazonaws.com^
@@||sysctl.org^
@@||tui.taobao.com^
@@||winhelp2002.mvps.org^
@@||world.taobao.com^
@@||zeustracker.abuse.ch^
@@||api.io.mi.com^
@@||data.mistat.xiaomi.com^