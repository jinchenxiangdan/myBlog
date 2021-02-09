(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{359:function(e,t,o){"use strict";o.r(t);var s=o(43),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"could-not-get-lock-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#could-not-get-lock-error"}},[e._v("#")]),e._v(" Could not get Lock error")]),e._v(" "),o("p",[e._v('When using Ubuntu, we contact with apt package mangement tool every day. However, sometimes we may encounter the problem "Could not get lock...(11: Resource temporarily unavailable)"')]),e._v(" "),o("p",[e._v("When we encounter this problem, we need to check if the system is updating, or the apt is running somewhere. If it is, just wait until the process done. Or else, we could use other methods to reslove the apt multithread errors.")]),e._v(" "),o("div",{staticClass:"language-shell line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("Error: $ E: Unable to acquire the dpkg frontend lock "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("/var/lib/dpkg/lock-frontend"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", is another process using it?\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("1: usually this happends due to some process is using APT package management tool.")]),e._v(" "),o("p",[e._v("Method :\n"),o("code",[e._v("rm /var/lib/dpkg/lock-frontend")]),e._v(" "),o("code",[e._v("sudo dpkg --configure -a")])]),e._v(" "),o("p",[e._v("The first method would fix the problem for you in most cases. But my case was a bit different. I was updating my system and accidentally closed the terminal. For that reason, there were no processes running apt, but it still showed me the error.")]),e._v(" "),o("p",[e._v("In this case, I just use\n"),o("code",[e._v("sudo rm /var/lib/dpkg/lock")]),e._v("\nto remove the lock file.")]),e._v(" "),o("p",[e._v("Then apt could be used right now")]),e._v(" "),o("p",[e._v("REFERENCE:\nhttps://itsfoss.com/could-not-get-lock-error/")]),e._v(" "),o("Valine")],1)}),[],!1,null,null,null);t.default=r.exports}}]);