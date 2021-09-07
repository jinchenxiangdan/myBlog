(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{464:function(e,o,t){"use strict";t.r(o);var r=t(16),s=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"npm-racces-permission-denied"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-racces-permission-denied"}},[e._v("#")]),e._v(" npm RACCES: permission denied")]),e._v(" "),t("p",[e._v("When I run "),t("code",[e._v("npm run deploy")]),e._v(' to deploy my blog, the error "Error: EACCES: permission denied" shows up. However, it doesn\'t recommend to run as super user. To resolve it, there is '),t("strong",[e._v("two")]),e._v(" ways to do it.")]),e._v(" "),t("h3",{attrs:{id:"option-1-change-the-permission-to-npm-s-default-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-1-change-the-permission-to-npm-s-default-directory"}},[e._v("#")]),e._v(" Option 1: Change the permission to npm's default directory.")]),e._v(" "),t("p",[e._v("Firstly, using "),t("code",[e._v("npm config get prefix")]),e._v("  to get the npm directory. If it just "),t("code",[e._v("/usr")]),e._v(", switch to option 2.")]),e._v(" "),t("p",[e._v("Then using command "),t("code",[e._v("sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}")]),e._v(" to add premissions to user for only npm directories.")]),e._v(" "),t("h3",{attrs:{id:"option-2-change-npm-s-default-directory-to-another-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-2-change-npm-s-default-directory-to-another-directory"}},[e._v("#")]),e._v(" Option 2: Change npm's default directory to another directory")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Make a directory for global installations:")]),e._v(" "),t("p",[t("code",[e._v("mkdir ~/.npm-global")])])]),e._v(" "),t("li",[t("p",[e._v("Configure npm to use the new directory path:")]),e._v(" "),t("p",[t("code",[e._v("npm config set prefix '~/.npm-global'")])])]),e._v(" "),t("li",[t("p",[e._v("Open or create a "),t("code",[e._v("~/.profile")]),e._v(" file and add this line:")]),e._v(" "),t("p",[t("code",[e._v("export PATH=~/.npm-global/bin:$PATH")])])]),e._v(" "),t("li",[t("p",[e._v("Back on command line, update your system variables:")]),e._v(" "),t("p",[t("code",[e._v("source ~/.profile")])])])]),e._v(" "),t("p",[e._v("To do a test, you could just download a package globally without using "),t("code",[e._v("sudo")])]),e._v(" "),t("p",[t("code",[e._v("npm install node-g.raphael --save")])]),e._v(" "),t("h4",{attrs:{id:"if-you-are-using-macos-then-you-could-use-brew-install-node-to-reinstall-nodejs-homebrew-would-set-things-up-with-correct-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-you-are-using-macos-then-you-could-use-brew-install-node-to-reinstall-nodejs-homebrew-would-set-things-up-with-correct-permissions"}},[e._v("#")]),e._v(" If you are using  MacOS, then you could use "),t("code",[e._v("brew install node")]),e._v(" to reinstall nodejs. Homebrew would set things up with correct permissions.")])])}),[],!1,null,null,null);o.default=s.exports}}]);