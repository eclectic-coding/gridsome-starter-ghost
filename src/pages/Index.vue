<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    <Pager :info="$page.posts.pageInfo" linkClass="pager__link" class="pager" />

  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allGhostPost(
    perPage: 3,
    page: $page,
    sortBy: "published_at",
    order: DESC
) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        description: excerpt
        date: published_at (format: "D. MMMM YYYY")
        path
        slug
        id
        cover_image: feature_image
        tags {
          id
          title: name
          path
          slug
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    Author,
    PostCard,
    Pager
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
  .pager {
    display: inline-block;
    width: 100%;
    text-align: center;

    &__link {
      color: var(--link-color);
      text-align: center;
      text-decoration: none;
      padding: .5rem 1rem;

      &:hover:not(.active) {
        background-color: var(--bg-content-color);
        border-radius: 5px;
        color: var(--link-color);
      }
    }
  }

  .active {
    background-color: var(--bg-content-color);
    border-radius: 5px;
  }

</style>
