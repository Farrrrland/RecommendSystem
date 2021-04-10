<template>
  <div id="upload">
    <h1> upload </h1>
    <form name="imgForm" id="imgForm" enctype="multipart/form-data" action="图片上传接口" method='post'>
      <input class="input-loc-img"  name="imgLocal" id="imgLocal" type='file' accept="image/*" @change="selectImg" />
    </form> 
  </div>
</template>

<script>

</script>