import json
import os
import nmap

# def rescreat(fi):
#     print(fi)
#     np=nmap.PortScanner()
#     # np.scaninfo()
#     #np.csv()
#     result=np.scan(hosts=fi,arguments='-p80 --script http-waf-detect --script-args="http-waf-detect.aggro,http-waf-detect.uri=/testphp.vulnweb.com/artists.php" ')
#     #print(np.all_hosts())
#     #print(np.csv())
#     #print(np.listscan())
#     res=[result['scan']]
#     #print(np.scan(fi, '1-200'))
#     fl=json.dumps(result)
#     with open("./accounts/result.json","w") as f:
#         f.write(fl)
#     print(res)
#     return res[0]


def waf(ur):
    fales = 'No Firewall Detected'
    true = 'Firewall Detected'
    
    res = os.system('wafw00f {url} -o resultwaf.json'.format(url=ur))
    with open("./accounts/resultwaf.json","w") as f:
        f.write(res)
    return res

def export():
    return "./accounts/result.json"


def exportwaf():
    return "./accounts/resultwaf.json"
