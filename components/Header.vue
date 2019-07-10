<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <nuxt-link to="/" class="navbar-brand">conduit</nuxt-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link" active-class="active" exact>Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/article/new" class="nav-link" active-class="active"><i class="ion-compose"></i>&nbsp;New Post</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/user/1/setting" class="nav-link" active-class="active"><i class="ion-gear-a"></i>&nbsp;Settings</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/user/signup" class="nav-link" active-class="active">Sign up</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
