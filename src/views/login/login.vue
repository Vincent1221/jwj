<template>
  <Form ref="loginForm" >
    <FormItem prop="username">
      <Input  placeholder="请输入用户名">
        <span slot="prepend">
          <Icon type="md-mail"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="24" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" long class="u-login-btn" @click="submit">登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'login',
  methods: {
    submit() {
      this.$router.push('/home/appcenter')
    }
  },
}
</script>

