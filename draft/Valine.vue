
<template>
  <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <div>
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <em class="post-meta-item-text">visitors: </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <h3>
      <a href="javascript:;"></a>
      Comments:
    </h3>
    <div id="vcomments"></div>
  </section>
</template>
 
<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id
        = window.location.pathname
      this.window = window
      window.AV = require('leancloud-storage')
    }
 
    new Valine({
      el: '#vcomments',
      appId: 'IJ9pWVxQ6BrmIp9aC0qB4ap6-gzGzoHsz',// your appId
      appKey: 'cWE6hFguV3argXBpcgWWkLpu', // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'mm',
      lang: 'en',
      placeholder: 'write here',
      meta: ['nick', 'mail']
    });
  },
}
</script>
