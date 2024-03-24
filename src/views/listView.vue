<template>
    <h1>전화번호부</h1>

<h2>리스트</h2>

<p>등록된 전화번호 리스트입니다.</p>

    <table border="1">
        <colgroup>
            <col style="width: 100px;">
            <col style="width: 120px;">
            <col style="width: 120px;">
            <col style="width: 190px;">
        </colgroup>
        <thead>
            <tr>
                <th>이름(name)</th>
                <th>핸드폰(hp)</th>
                <th>회사(company)</th>
                <th>관리</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="i" v-for="(phonebookVo, i) in phonebookList">
                <td>{{phonebookVo.name}}</td>
                <td>{{ phonebookVo.hp }}</td>
                <td>{{ phonebookVo.company }}</td>
                <td>
                    <button type="submit" v-on:click="removePhone(phonebookVo.personId)">삭제하기</button>
                    <RouterLink v-bind:to="`/modify/${phonebookVo.personId}`">[수정폼이동]</RouterLink>
                </td>
            </tr>
        </tbody>	
    </table>
    <br>

<a href="/write">등록폼 이동</a>
</template>


<script>
import axios from 'axios';

export default {
    name: "listView",
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
        getList(){
            console.log("List");
            axios({
                method: 'get',  //put,post,delete
                url: 'http://localhost:9000/api/phones',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: phonebookVo, //get방식 파라미터로 값이 전달
                //data: phonebookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.phonebookList = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
        removePhone(personId){
            console.log("Delete");
            axios({
                method: 'delete',  //put,post,delete
                url: 'http://localhost:9000/api/phones/'+ personId,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: phonebookVo, //get방식 파라미터로 값이 전달
                data: {personId}, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                
                if(response.data.count>0){
					this.phonebookList.splice(response.data, 1);
				} else {
					alert("삭제에 실패했습니다");
				}
                
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created(){
        this.getList();
    }
};
</script>


<style></style>