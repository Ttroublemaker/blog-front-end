<template>
  <div class="blog">
    <div class="search-list">
      <searchResult @searching="closeSearch" />
    </div>
    <el-switch class='switch' v-model="listValue" v-if="!searching" active-text="推荐列表" inactive-text="博客列表" @change='switchList'></el-switch>
    <div class="blog-list" v-if="!searching&&!listValue">
      <blogList :classify='classify' />
    </div>
    <div class="recommend-list" v-if="!searching&&listValue">
      <recommendItem />
    </div>
  </div>
</template>

<script>
import blogList from "./components/blog-list";
import recommendItem from "./components/recommend-item";
import searchResult from "./components/search-result";

const fs = require('fs')
export default {
  components: {
    recommendItem,
    searchResult,
    blogList
  },
  data () {
    return {
      screenWidth: document.body.clientWidth, //获取body宽度
      searching: false,
      listValue: true
    };
  },
  computed: {
    classify () {
      return this.$route.query.classify
    }
  },
  created () {
    this.listValue = this.$route.query.listType === 'recommend' ? true : false
  },
  methods: {
    closeSearch (val) {
      this.searching = val
    },
    downloadUrl (url) {
      let iframe = document.createElement('iframe');
      iframe.style.display = 'none'
      iframe.src = url
      iframe.onload = function () {
        document.body.removeChild(iframe)
      }
      document.body.appendChild(iframe)
    },
    download () {
      const oldname = '1578541601676-add.png'
      const filename = '312'
      this.downloadUrl(`http://localhost:3000/file/downloadFile?filename='${filename}'&oldname=${oldname}`);
    },
    del () {

    },
    switchList (val) {
      console.log(val)
    }
  }
};
</script>
<style lang="scss" scoped>
.blog {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  .search-list,
  .blog-list,
  .recommend-list {
    box-sizing: border-box;
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 20px;
    width: 70%;
    margin-bottom: 20px;
  }
  .search-list {
    border: 1px solid transparent;
    padding: 0;
    margin-bottom: 20px;
  }
  .blog-list-timeline {
    position: absolute;
    text-align: left;
    right: 0;
    width: 30%;
  }
  .switch {
    margin-top: -20px;
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 1200px) {
  .search-list,
  .blog-list,
  .recommend-list {
    width: 100% !important;
  }
  .blog-list-timeline {
    position: relative !important;
    width: 100% !important;
  }
}
</style>
