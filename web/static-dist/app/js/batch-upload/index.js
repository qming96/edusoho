!function(l){function e(e){for(var t,n,a=e[0],i=e[1],r=e[2],o=0,s=[];o<a.length;o++)n=a[o],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&s.push(u[n][0]),u[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(l[t]=i[t]);for(f&&f(e);s.length;)s.shift()();return d.push.apply(d,r||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var n=d[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==u[r]&&(a=!1)}a&&(d.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},u={80:0},d=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var f=a;d.push([510,0]),c()}({17:function(e,t){e.exports=jQuery},325:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=n.n(r),s=n(4),l=n(2),c=n.n(l),u=n(8),d=n.n(u),f=n(9),h=n.n(f),p=n(5),m=n.n(p),v=n(27),g=n.n(v),y=n(39),b=n.n(y);function k(a){return function(){var e,t,n=m()(a);return t=function(){if("undefined"==typeof Reflect||!c.a)return;if(c.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(c()(Date,[],function(){})),1}catch(e){return}}()?(e=m()(this).constructor,c()(n,arguments,e)):n.apply(this,arguments),h()(this,t)}}var _=function(e){d()(n,e);var t=k(n);function n(){return i()(this,n),t.call(this)}return o()(n,[{key:"_open",value:function(){$(".file-chooser-bar").addClass("hidden"),$(".file-chooser-main").removeClass("hidden")}},{key:"_close",value:function(){$(".file-chooser-main").addClass("hidden"),$(".file-chooser-bar").removeClass("hidden")}},{key:"_getUrlParameter",value:function(e,t){var n=e.split("?");if(n&&2==n.length)for(var a=decodeURIComponent(n[1]).split("&"),i=0;i<a.length;i++){var r=a[i].split("=");if(r[0]===t)return void 0===r[1]?null:r[1]}return null}}]),n}(b.a);function j(a){return function(){var e,t,n=m()(a);return t=function(){if("undefined"==typeof Reflect||!c.a)return;if(c.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(c()(Date,[],function(){})),1}catch(e){return}}()?(e=m()(this).constructor,c()(n,arguments,e)):n.apply(this,arguments),h()(this,t)}}var w=function(e){d()(a,e);var n=j(a);function a(e){var t;return i()(this,a),(t=n.call(this)).container=e,t.loadShareingContacts=!1,t._init(),t._initEvent(),t}return o()(a,[{key:"_init",value:function(){this._initTagSelect(),this._loadList()}},{key:"_initTagSelect",value:function(){var e=$(this.container).find("#materialTags");e.select2({ajax:{url:e.data("url")+"#",dataType:"json",quietMillis:100,data:function(e){return{q:e,page_limit:100}},results:function(e){var n=[{id:"0",name:"--选择标签--"}];return $.each(e,function(e,t){n.push({id:t.id,name:t.name})}),{results:n}}},formatSelection:function(e){return e.name},formatResult:function(e){return e.name},width:"off",multiple:!1,locked:!0,placeholder:Translator.trans("--选择标签--"),maximumSelectionSize:100})}},{key:"_initEvent",value:function(){$(this.container).on("change","#materialType",this._switchFileSourceSelect.bind(this)),$(this.container).on("click","#materialTags",this._switchTags.bind(this)),$(this.container).on("click",".js-material-type",this._switchFileSource.bind(this)),$(this.container).on("click",".js-browser-search",this._filterByFileName.bind(this)),$(this.container).on("click",".pagination a",this._paginationList.bind(this))}},{key:"_loadList",value:function(){var t=this,e=$(".js-browser-search").data("url");$.get(e,this._getParams(),function(e){t.container.find(".js-material-list").html(e)})}},{key:"_getParams",value:function(){var t={};return $(".js-material-lib-search-form input[type=hidden]").each(function(e){t[$(this).attr("name")]=$(this).val()}),t}},{key:"_paginationList",value:function(e){e.stopImmediatePropagation(),e.preventDefault();var t=this._getUrlParameter($(e.currentTarget).attr("href"),"page");$("input[name=page]").val(t),this._loadList()}},{key:"_switchTags",value:function(e){var t=e.currentTarget;$("input[name=tagId]").val($(t).val()),this._loadList()}},{key:"_switchFileSourceSelect",value:function(e){var t=e.currentTarget;switch($("input[name=sourceFrom]").val($(t).val()),$("input[name=page]").val(1),$(t).val()){case"upload":$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;case"shared":this._loadSharingContacts.call(this,$(t).data("sharingContactsUrl")),$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;default:$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden")}this._loadList()}},{key:"_switchFileSource",value:function(e){var t=e.currentTarget,n=$(t).data("type");switch($(t).addClass("active").siblings().removeClass("active"),$("input[name=sourceFrom]").val(n),$("input[name=page]").val(1),n){case"my":$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;case"sharing":this._loadSharingContacts.call(this,$(t).data("sharingContactsUrl")),$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden");break;default:$(".js-file-name-group").removeClass("hidden"),$(".js-file-owner-group").addClass("hidden")}this._loadList()}},{key:"_loadSharingContacts",value:function(e){1!=this.loadShareingContacts?($.get(e,function(e){var n;0<g()(e).length&&(n="<option value=''>".concat(Translator.trans("activity.manage.choose_teacher_hint"),"</option>"),$.each(e,function(e,t){n+="<option value='".concat(t.id,"'>").concat(t.nickname," </option>")}),$(".js-file-owner",self.element).html(n))},"json"),this.loadShareingContacts=!0):console.error("teacher list has been loaded")}},{key:"_filterByFileName",value:function(){$("input[name=keyword]").val($(".js-file-name").val()),this._loadList()}}]),a}(_);function C(a){return function(){var e,t,n=m()(a);return t=function(){if("undefined"==typeof Reflect||!c.a)return;if(c.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(c()(Date,[],function(){})),1}catch(e){return}}()?(e=m()(this).constructor,c()(n,arguments,e)):n.apply(this,arguments),h()(this,t)}}var S=function(e){d()(a,e);var n=C(a);function a(e){var t;return i()(this,a),(t=n.call(this)).container=e,t._init(),t._initEvent(),t}return o()(a,[{key:"_init",value:function(){this._loadList()}},{key:"_initEvent",value:function(){$(this.container).on("click",".pagination a",this._paginationList.bind(this)),$(this.container).on("click",".js-course-browser-search",this._filterByFileName.bind(this))}},{key:"_loadList",value:function(){var t=$(".course-file-browser"),e=t.data("url");$.get(e,this._getParams(),function(e){t.html(e)})}},{key:"_getParams",value:function(){var e={};return $(".js-course-file-search-form").find("input[type=hidden]").each(function(){e[$(this).attr("name")]=$(this).val()}),e}},{key:"_paginationList",value:function(e){e.stopImmediatePropagation(),e.preventDefault();var t=this._getUrlParameter($(e.currentTarget).attr("href"),"page");$(".js-course-file-search-form").find("input[name=page]").val(t),this._loadList()}},{key:"_filterByFileName",value:function(){$(".js-course-file-search-form").find("input[name=keyword]").val($(".js-course-file-name").val()),$(".js-course-file-search-form").find("input[name=page]").val(1),this._loadList()}}]),a}(_);function L(a){return function(){var e,t,n=m()(a);return t=function(){if("undefined"==typeof Reflect||!c.a)return;if(c.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(c()(Date,[],function(){})),1}catch(e){return}}()?(e=m()(this).constructor,c()(n,arguments,e)):n.apply(this,arguments),h()(this,t)}}var T=function(e){d()(a,e);var n=L(a);function a(e){var t;return i()(this,a),(t=n.call(this)).init(),t}return o()(a,[{key:"init",value:function(){this.initTab(),this.initFileChooser()}},{key:"initTab",value:function(){$("#material a").click(function(e){e.preventDefault();var t=$(this);t.find('[type="radio"]').prop("checked","checked"),$(".js-batch-create-content").find("[data-role=batch-item],[data-role=batch-select]").prop("checked",!1),t.closest("li").siblings("li").find('[type="radio"]').prop("checked",!1),t.tab("show")})}},{key:"initFileChooser",value:function(){new w($("#chooser-material-panel")),new S($("#chooser-course-panel"))}},{key:"fileSelect",value:function(e){this.fillTitle(e),this.emit("select",e)}},{key:"fillTitle",value:function(e){var t,n=$("#title");0<n.length&&""==n.val()&&(t=e.name.substring(0,e.name.lastIndexOf(".")),n.val(t))}}],[{key:"openUI",value:function(){$(".file-chooser-bar").addClass("hidden"),$(".file-chooser-main").removeClass("hidden")}},{key:"closeUI",value:function(){$(".file-chooser-main").addClass("hidden"),$(".file-chooser-bar").removeClass("hidden")}}]),a}(b.a),P=function(){function t(e){i()(this,t),this.element=$(e.element),this.uploader=null,this.files=[],this.$sortable=$("#sortable-list"),this.init()}return o()(t,[{key:"init",value:function(){this.initUploader(),this.initEvent();new T}},{key:"initUploader",value:function(){var t=this,e=this.element;this.uploader=new UploaderSDK({id:e.attr("id"),sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:e.data("initUrl"),finishUrl:e.data("finishUrl"),accept:e.data("accept"),process:this.getUploadProcess(),ui:"batch",fileNumLimit:void 0!==e.data("numLimit")?e.data("numLimit"):null,locale:document.documentElement.lang}),this.uploader.on("file.finish",function(e){t.files.push(e)}),this.uploader.on("error",function(e){var t={F_DUPLICATE:Translator.trans("uploader.file.exist")};e.message||(e.message=t[e.error]),Object(s.a)("danger",e.message)})}},{key:"initEvent",value:function(){var a=this,i=this;$(".js-upload-params").on("change",function(e){a.uploader.setProcess(a.getUploadProcess())}),$(".js-batch-create-lesson-btn").on("click",function(e){var t,n=$(".js-batch-create-content").find('input[data-role="batch-item"]:checked').length;!a.files.length&&n<1?Object(s.a)("danger",Translator.trans("uploader.select_one_file")):((t=$(e.currentTarget)).button("loading"),a.validLessonNum(t)?0<n?(console.log("files",n),i.submitSelectFile(t,n)):i.submitUploaderFile(t):console.log(a.validLessonNum(t)))}),$('[data-toggle="popover"]').popover({html:!0}),$(".js-batch-create-content").on("click","[data-role=batch-select]",function(){1==$(this).is(":checked")?$(this).parents(".js-table-list").find("[data-role=batch-item]").prop("checked",!0):$(this).parents(".js-table-list").find("[data-role=batch-item]").prop("checked",!1)}),$(".js-batch-create-content").on("click","[data-role=batch-item]",function(){1!=$(this).is(":checked")&&$(".js-batch-create-content").find("[data-role=batch-select]").prop("checked",!1)})}},{key:"submitSelectFile",value:function(r,o){var s=this;$(".js-batch-create-content").find('input[data-role="batch-item"]:checked').map(function(e,t,n){var a=!1;e+1==o&&(a=!0,console.log("isLast",a));var i=$(t).parents(".file-browser-item").data("id");console.log("fileId",i),s.createLesson(r,i,a)})}},{key:"submitUploaderFile",value:function(a){var i=this;console.log("files",this.files),this.files.map(function(e,t){var n=!1;t+1==i.files.length&&(n=!0),console.log("file",e),i.createLesson(a,e.fileId,n)})}},{key:"getUploadProcess",value:function(){var e={video:$(".js-upload-params").get().reduce(function(e,t){return e[$(t).attr("name")]=$(t).find("option:selected").val(),e},{}),document:{type:"html"}};return 0<$("[name=support_mobile]").length&&(e.common={supportMobile:$("[name=support_mobile]").val()}),e}},{key:"validLessonNum",value:function(t){var n=!0;return $.ajax({type:"post",url:t.data("validUrl"),async:!1,data:{number:this.files.length},success:function(e){e&&e.error&&(Object(s.a)("danger",e.error),t.button("reset"),n=!1),n=!0}}),n}},{key:"createLesson",value:function(e,t,n){var a=this;$.ajax({type:"post",url:e.data("url"),async:!1,data:{fileId:t},success:function(e){e&&e.error?Object(s.a)("danger",e.error):a.$sortable.trigger("addItem",e)},error:function(e){console.log("error",e),Object(s.a)("danger",Translator.trans("uploader.status.error"))},complete:function(e){console.log("complete",e),n&&$("#modal").modal("hide")}})}}]),t}();t.a=P},510:function(e,t,n){"use strict";n.r(t),new(n(325).a)({element:"#uploader-container"}),$("#uploader-container").parents(".modal").on("hidden.bs.modal",function(){window.location.reload()})}});