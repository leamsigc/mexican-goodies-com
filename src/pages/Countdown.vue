<script lang="ts">
import TheFooter from '../components/TheFooter.vue'
import { ref, computed, watchEffect, Ref, watch, reactive, onUnmounted } from 'vue'
import { count } from 'console'

export default {
  components: {
    TheFooter
  },
  setup() {
    const futureDate = new Date('2021-11-25T00:00:00')
    const getDateDiff = (date1: Date, date2: Date) => {
      const diff = new Date(date2.getTime() - date1.getTime())
      const numberDiff = Number(date1) - Number(date2)
      const sec = () => {
        let s = (Math.trunc(numberDiff / 1000) % 60) * -1
        return s > 9 ? s : '0' + s
      }
      const min = () => {
        let m = (Math.trunc(numberDiff / 1000 / 60) % 60) * -1
        return m > 9 ? m : '0' + m
      }
      const hour = () => {
        let h = (Math.trunc(numberDiff / 1000 / 3600) % 60) * -1
        return h > 24 ? h - 24 : h > 9 ? h : '0' + h
      }
      const dias = () => {
        let d = Math.trunc(Math.trunc(numberDiff / 1000 / 3600) * -1) / 24
        return d > 9 ? d : '0' + d.toLocaleString('en-US', { maximumFractionDigits: 0 })
      }
      return {
        year: diff.getUTCFullYear() - 1970,
        month: diff.getUTCMonth(),
        day: dias(),
        hour: hour(),
        min: min(),
        sec: sec()
      }
    }
    const now = new Date()

    let timeState = reactive(getDateDiff(now, futureDate))
    const timer = setInterval(() => {
      const { year, month, day, hour, min, sec } = getDateDiff(new Date(), futureDate)
      console.log(month)
      timeState.sec = sec
      timeState.min = min
      timeState.hour = hour
      timeState.day = day
    }, 1000)

    onUnmounted(() => {
      clearInterval(timer)
    })
    return { timeState }
  }
}
</script>
<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
    <div class="text-center grid place-content-center bg-base-200">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold"><strong>Mexican Goodies</strong> <small>is comming...</small></h1>
        <div class="grid grid-flow-col gap-5 place-content-center text-center auto-cols-max">
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="font-mono text-5xl countdown">
              <span :style="`--value:${timeState.day}`"></span>
            </span>
            days
          </div>
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="font-mono text-5xl countdown">
              <span :style="`--value:${timeState.hour}`"></span>
            </span>
            hours
          </div>
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="font-mono text-5xl countdown">
              <span :style="`--value:${timeState.min}`"></span>
            </span>
            min
          </div>
          <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span class="font-mono text-5xl countdown">
              <span :style="`--value:${timeState.sec}`"></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
    <div class="form-container grid place-content-center p-2 bg-gray-900">
      <div class="card text-center shadow-md">
        <h2 class="card-title">Register new business</h2>
        <div class="card-body">
          <form name="new-business" netlify class="max-w-md">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input placeholder="username" class="input input-bordered" type="text" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input placeholder="username" class="input input-bordered" type="text" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Your bio</span>
              </label>
              <textarea class="textarea h-24 textarea-bordered" placeholder="Bio"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>
