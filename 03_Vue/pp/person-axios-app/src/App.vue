<template>
  <h1>사용자 목록</h1>
  <button @click="requestAPI">조회</button>
  <h2>사용자 정보</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>나이</th>
        <th>핸드폰</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in persons" :key="person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.phone }}</td>
      </tr>
    </tbody>
  </table>
  <h2>새 사용자 추가</h2>
  <form @submit.prevent="addPerson">
    <input v-model="newPerson.name" placeholder="이름" required />
    <input v-model="newPerson.age" type="number" placeholder="나이" required />
    <input v-model="newPerson.phone" placeholder="핸드폰" required />
    <button type="submit">추가</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const persons = ref([]);
const newPerson = ref({ name: '', age: '', phone: '' });

const requestAPI = async () => {
  try {
    const url = 'api/persons'; // JSON Server 실행 포트 확인 (기본: 3000)
    const response = await axios.get(url);
    console.log('# 응답 데이터 : ', response.data);
    persons.value = response.data;
  } catch (error) {
    console.error('데이터 요청 실패:', error);
  }
};

const addPerson = async () => {
  try {
    const url = 'http://localhost:3000/persons';
    const response = await axios.post(url, newPerson.value); // 새로운 사용자 추가
    console.log('# 추가된 사용자 : ', response.data);

    newPerson.value = { name: '', age: '', phone: '' }; // 입력 필드 초기화
    requestAPI(); // 목록 갱신
  } catch (error) {
    console.error('사용자 추가 실패:', error);
  }
};
</script>

<style>
table {
  width: 80%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

input {
  margin: 10px;
  padding: 5px;
}
</style>
