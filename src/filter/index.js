import Vue from 'vue';


//泰斗后台的成交途径

Vue.filter('timeSlot', val => {
    if (val == 1) return "上午(08:00-12:00)";
    if (val == 2) return "下午(14:00-18:00)";
})
//泰斗后台的支付状态

Vue.filter('payStatus', val => {
    if (val == 1) return "无需支付";
    if (val == 2) return "待支付";
    if (val == 3) return "已支付";
    if (val == 4) return "支付失败";
    if (val == 5) return "支付超时";
    if (val == 6) return "支付成功";
    if (val == 7) return "退款中";
    if (val == 8) return "已退款";
    if (val == 9) return "退款失败";
    if (val == 10) return "部分退款";
})

