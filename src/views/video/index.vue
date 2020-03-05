<template>
    <div>
        video
        <Button @click="goto"> 店家</Button>
    </div>
</template>
<script>
export default {
    methods: {
        goto() {
            this.$router.push('/home/appcenter')
        }
    }
}
</script>