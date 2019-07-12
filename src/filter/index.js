import Vue from 'vue';


//泰斗后台的成交途径

Vue.filter('timeSlot', val => {
    if (val == 1) return "上午(08:00-12:00)";
    if (val == 2) return "下午(14:00-18:00)";
})

