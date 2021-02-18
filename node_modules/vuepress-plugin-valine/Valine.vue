<template>
  <div
    class="vcomments"
    :id="uuid"
  ></div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "Valine",
  data () {
    return {
      uuid: "id" + uuid(),
      Valine: null
    };
  },
  watch: {
    $route: {
      handler () {
        this.init();
      },
      deep: true
    }
  },
  created () {
    this.uuid = "id" + uuid();
  },
  mounted () {
    import('valine')
      .then(pkg => {
        this.Valine = pkg.default
        setTimeout(() => {
          this.init();
        }, 500);
      })

  },
  methods: {
    init () {
      new this.Valine({
        el: "#" + this.uuid,
        // other config
        placeholder: "來都來了不踩一下嗎？",
        notify: true, // 邮件提醒!!!
        // verify: true, // 验证码
        // visitor: true,
        avatar: "retro",
        visitor: true ,// 阅读量统计
        meta: ["nick", "mail"],
        requiredFields:["nick", "mail"],
        recordIP: true,
        enableQQ:true,
        pageSize: 20,
        avatar:'wavatar',
        path: this.$route.path,
        ...COMMENT_OPTIONS
      });
    }
  }
};
</script>

<style lang="stylus"></style>