<template>
    <h1>전화번호부</h1>

	<h2>등록폼</h2>

	<p>
		전화번호를 등록하려면<br> 아래 항목을 기입하고 "등록" 버튼을 클릭하세요
	</p>

	<form v-on:submit.prevent="addInfo" action="" method="post">
		<div>
			<label>이름(name)</label> 
			<input type="text" name="name" v-model="phonebookVo.name">
		</div>

		<div>
			<label>핸드폰(hp)</label>
			<input type="text" name="hp" v-model="phonebookVo.hp">
		</div>

		<div>
			<label>회사(company)</label> 
			<input type="text" name="company" v-model="phonebookVo.company">
		</div>

		<button type="submit">등록</button>
	</form>

	<br>
	<br>
	<a href="/">리스트 이동</a>
</template>


<script>
import axios from 'axios';

export default {
    name: "writeFormView",
    components: {},
    data() {
        return {
			phonebookList: [], 
            phonebookVo: {
                name: "",
                hp: "",
                company: ""
            }
        };
    },
    methods: {
        addInfo(){
            console.log("addInfo");
            axios({
                method: 'post',  //put,post,delete
                url: 'http://localhost:9000/api/phones',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: phonebookVo, //get방식 파라미터로 값이 전달
                data: this.phonebookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data.count);

				if(response.data.count>0){
					this.$router.push({path: '/'});
				} else {
					alert("등록에 실패했습니다");
				}

            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){}
};
</script>


<style></style>