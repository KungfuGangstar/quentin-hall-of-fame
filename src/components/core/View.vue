<template>
  <div>
    <welcome />
    <recent-projects />
    <services />
    <get-in-touch />
  </div>
</template>

<script>
export default {
  components: {
    GetInTouch: () => import('@/components/GetInTouch'),
    RecentProjects: () => import('@/components/RecentProjects'),
    Services: () => import('@/components/Services'),
    Welcome: () => import('@/components/Welcome')
  }
}
</script>
