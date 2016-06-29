---
layout: post
category: "POS_zh"
title: "退货商品"
permalink: "pos_refund.html"
author: "hwsttl"
date: "2016-06-17 19:59:34 +0900"
weight: 30
lang: "zh_CN"
---

### <i class="fa fa-gear" markdown="1"></i> 确认装备使用与否
*※ 注意 : 注意 : 按照现在卖场的VAN关联装备(磁卡读卡器, 电子签名板等)使用与否，选择看帮助内容。*{: style="color: red; font-size: 18px; font-weight: bold;"}

* [装备未使用时](#not_use_devices)
* [装备使用时](#use_devices)

------------------------

## <a name="not_use_devices"></a><i class="fa fa-undo" markdown="1"></i> 装备未使用时商品退还

### <i class="fa fa-credit-card" markdown="1"></i> 1. 信用卡退还
![信用卡退还]({{ site.url }}/images/pos_refund/nodevice/pos_20.png)
![信用卡退还]({{ site.url }}/images/pos_refund/nodevice/pos_21.png)

1. 打击‘’查询发票‘，引入要退还的发票。
    * 参照[发票查询方法](/pos_receipt.html)的说明。
2. 打击‘退还’。
3. 打击[付款]按键。
4. 确认内容以后打击‘临时注册‘。

------------------------

### <i class="fa fa-money" markdown="1"></i> 2.现金退还
![现金退还]({{ site.url }}/images/pos_refund/nodevice/pos_23.png)
![现金退还]({{ site.url }}/images/pos_refund/nodevice/pos_24.png)

1. 打击‘’查询发票‘，引入要退还的发票。
    * 参照[发票查询方法](/pos_receipt.html)的说明。
2. 打击‘退还’。
3. 打击[付款]按键。
4. 确认内容以后打击‘付款结束‘。

------------------------

### <i class="fa fa-plus-square" markdown="1"></i> 3. 复合付款退还
![复合付款退还]({{ site.url }}/images/pos_refund/nodevice/pos_26.png)
![复合付款退还]({{ site.url }}/images/pos_refund/nodevice/pos_27.png)
![复合付款退还]({{ site.url }}/images/pos_refund/nodevice/pos_28.png)
![复合付款退还]({{ site.url }}/images/pos_refund/nodevice/pos_30.png)
![复合付款退还]({{ site.url }}/images/pos_refund/nodevice/pos_31.png)

1. 打击‘’查询发票‘，引入要退还的发票。
    * 参照[发票查询方法](/pos_receipt.html)的说明。
2. 打击‘退还’。
3. 打击[付款]按键。
    * 页面例子) 退货1,000元的商品的时候，用信用卡800元和现金200元。
4. 确认内容以后双击。
5. 打击‘临时注册’，在付款信息标示"*Refund*"，处理结束。
6. 剩下的付款内容也双击。
7. 打击[付款结束]按键，退货结束。
    * 付款内容都退货结束的话，自动结束处理。

------------------------

## <a name="use_devices"></a><i class="fa fa-undo" markdown="1"></i> 装备使用时商品退还

### <i class="fa fa-credit-card" markdown="1"></i> 1. 信用卡退还
![信用卡退还]({{ site.url }}/images/pos_refund/device/pos_20.png)
![信用卡退还]({{ site.url }}/images/pos_refund/device/pos_22.png)

1. 打击‘’查询发票‘，引入要退还的发票。
    * 参照[发票查询方法](/pos_receipt.html)的说明。
2. 打击‘退还’。
3. 确认内容以后，打击[读卡]按键，就加载指南刷卡的短信。
4. 加载中，在终端机插入信用卡，就自动退货。短信窗上要取消的话，输入ESC。

------------------------

### <i class="fa fa-money" markdown="1"></i> 2. 现金退还
![现金退还]({{ site.url }}/images/pos_refund/device/pos_23.png)
![现金退还]({{ site.url }}/images/pos_refund/device/pos_25.png)

1. 打击‘’查询发票‘，引入要退还的发票。
    * 参照[发票查询方法](/pos_receipt.html)的说明。
2. 打击‘退还’。
3. 打击[付款]按键。
4. 打击[输入要求]按键，加载指南刷卡的短信。
5. 加载中，在终端机输入电话号码/身份证号/信用卡号码，就自动退还。短信窗上要取消的话，输入ESC。

------------------------

### <i class="fa fa-plus-square" markdown="1"></i> 3. 退还复合付款
![退还复合付款]({{ site.url }}/images/pos_refund/device/pos_26.png)
![退还复合付款]({{ site.url }}/images/pos_refund/device/pos_27.png)
![退还复合付款]({{ site.url }}/images/pos_refund/device/pos_29.png)
![退还复合付款]({{ site.url }}/images/pos_refund/device/pos_30.png)
![退还复合付款]({{ site.url }}/images/pos_refund/device/pos_32.png)

1. 打击[查询发票]，引入退还的发票。
    * 参照[发票查询方法](/pos_receipt.html)的说明。
2. 打击[退还]。
3. 打击[付款]按键。
    * 页面例子) 退货1,000元的商品的时候，用信用卡800元和现金200元。
4. 确认内容后双击。
5. 指定分期付款的期间。
6. 打击[读卡]按键，就加载指南刷卡的短信。
7. 加载中，在终端机插入信用卡，就自动退还。短信窗上要取消的话，输入ESC。
8. 剩下的付款内容也双击。
9. 输入收到的金额。
10. 打击[输入要求]按键，加载指南刷卡的短信。
11. 加载中，在终端机输入电话号码/身份证号/信用卡号码，就自动退还。短信窗上要取消的话，输入ESC。
