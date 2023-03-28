<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div>
        <v-simple-table class="py-1 px-3 elevation-1">
          <template v-slot:default>
            <thead>
              <tr class="grey lighten-25">
                <th class="text-left">#</th>
                <th class="text-left">UserName</th>
                <th class="text-left">Currency</th>
                <th class="text-left">Credit Limit</th>
                <th class="text-left">Net Exposure</th>
                <th class="text-left">Take</th>
                <th class="text-left">Give</th>
                <th class="text-left">Status</th>
                <th class="text-left">Info</th>
                <th class="text-left">Detail</th>
                <th class="text-left">Action</th>
                <th class="text-left">Lock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>bunny</td>
                <td>POINT@1</td>
                <td>1,00,000</td>
                <td>NA</td>
                <td>0</td>
                <td>0</td>
                <td>Active</td>
                <td>
                  <v-icon>mdi-alpha-i-circle-outline</v-icon>
                </td>
                <td>
                  <v-icon>mdi-pen</v-icon>
                </td>
                <td>
                  <v-icon>mdi-eye</v-icon>
                </td>
                <td>
                  <v-icon>mdi-lock</v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-flex xs12 md3 class="">
          <v-pagination
            v-model="page"
            :length="15"
            :total-visible="7"
          ></v-pagination>
        </v-flex>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
};
</script>
