<template>
  <div class="login-container">
  <!--
    el-form 表单组件
    每个表单项必须使用 el-form-item 组件包裹
    -->
  <div class="login-form-wrap">
    <div class="login-head">
      <div class="logo"></div>
    </div>
      <el-form class="login-form" ref="form" :model="user">
        <el-form-item>
            <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        <el-form-item class="login-form">
            <el-button class="login-btn" type="primary" @click="onLogin">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      // 获取登录表单数据
      const user = this.user
      // 表单验证

      // 验证通过，提交表单
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: user
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log('登录失败', err)
        this.$message.error('登录失败，手机号或密码不正确')
      })
    }
  }
}
</script>

<style scoped lang="less">
  .login-container{
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: url('./login_bg.jpg') no-repeat;
      background-size: cover;
    .login-form-wrap{
       min-width: 300px;
       padding: 30px 50px 10px;
       background-color: #fff;
       .login-head {
        display: flex;
        justify-content: center;
        .logo {
          width: 200px;
          height: 57px;
          background: url('./logo_login.png') no-repeat;
          background-size: contain;
        }
      }
      .login-form {
        .login-btn {
          width: 100%;
        }
      }
    }
  }
</style>
