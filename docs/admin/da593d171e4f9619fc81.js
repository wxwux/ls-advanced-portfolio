(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{355:function(t,s,e){},383:function(t,s,e){"use strict";var a=e(355);e.n(a).a},409:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"add-tags"},[s("div",{staticClass:"add-tags__wrapper"},[s("app-input",{attrs:{title:"Добавление тега",value:this.tags,errorText:this.errorText},on:{input:this.handleInput}})],1),s("tags",{attrs:{tags:this.tagsArray,interactive:!0},on:{remove:this.removeTag}})],1)};a._withStripped=!0;var i={components:{appInput:()=>e.e(0).then(e.bind(null,396)),tags:()=>e.e(9).then(e.bind(null,412))},props:{value:String,errorText:String},data(){return{tagsString:this.value}},computed:{tagsArray(){return!1==!!this.tags.length?[]:this.tags.split(",")},tags:{get(){return this.value},set(t){this.tagsString=t}}},methods:{handleInput(t){this.$emit("input",t),this.tags=t},removeTag(t){const s=[...this.tagsArray];s.splice(t,1),this.$emit("removeTag",s.join(","))}}},n=(e(383),e(96)),r=Object(n.a)(i,a,[],!1,null,"c7bf2d56",null);r.options.__file="src/admin/components/add-tags.vue";s.default=r.exports}}]);