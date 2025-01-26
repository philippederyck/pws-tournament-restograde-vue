<script setup>
import {MDBNavbar, MDBRow, MDBBtn, MDBCol} from "mdb-vue-ui-kit";
</script>

<template>
  <MDBNavbar expand="lg" light bg="light">
    <MDBRow>
      <MDBCol>
        <router-link to="/restaurants">
          <MDBBtn color="primary" size="sm">
            View&nbsp;restaurants
          </MDBBtn>
        </router-link>
      </MDBCol>
      <MDBCol>
        <router-link to="/reviews/new">
          <MDBBtn color="primary" size="sm">
            Add review
          </MDBBtn>
        </router-link>
      </MDBCol>
    </MDBRow>
  </MDBNavbar>
</template>