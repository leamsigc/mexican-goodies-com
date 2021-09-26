<script lang="ts">
import TheFooter from '../components/TheFooter.vue'
import { reactive, onUnmounted } from 'vue'

import { useI18n } from 'vue-i18n'
export default {
  components: {
    TheFooter
  },
  setup() {
    const futureDate = new Date('2021-09-29T00:00:00')
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
    const { t, locale } = useI18n({
      useScope: 'global'
    })
    const timer = setInterval(() => {
      const { year, month, day, hour, min, sec } = getDateDiff(new Date(), futureDate)
      timeState.sec = sec
      timeState.min = min
      timeState.hour = hour
      timeState.day = day
    }, 1000)

    onUnmounted(() => {
      clearInterval(timer)
    })

    function HandleChangeLocale(value: string) {
      locale.value = value
    }
    return { timeState, t, locale, HandleChangeLocale }
  }
}
</script>
<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
    <div class="text-center grid place-content-center bg-base-200">
      <div class="max-w-md">
        <div class="btn-group">
          <button class="btn btn-outline btn-sm" :class="{ 'btn-active': lang === locale }" v-for="lang in ['en', 'de', 'es']" @click="HandleChangeLocale(lang)">{{ lang }}</button>
        </div>
        <div class="dropdown">
          <div tabindex="0" class="m-1 btn">{{ t('language') }}</div>
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            <li v-for="lang in ['en', 'de', 'es']" class="mb-1">
              <button @click="HandleChangeLocale(lang)" class="btn btn-outline btn-block">{{ lang }}</button>
            </li>
          </ul>
        </div>

        <h1 class="mb-5 text-5xl font-bold">
          <strong> <span class="text-green-500">MEXI</span><span class="text-gray-100">CANGOO</span><span class="text-red-500">DIES</span></strong>
        </h1>
        <h6>{{ t('title') }}</h6>
        <p class="mb-5">
          <small>{{ t('by') }} <a href="https://leamsigc.com/" target="_blank" class="link link-accent">leamsigc</a> </small>
        </p>

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
        <p class="mt-8">
          <span class="block mb-5"> {{ t('soon') }} </span>
          <strong class="font-semibold text-lg text-green-600"> {{ t('register') }} </strong>
        </p>
      </div>
      <div class="mt-5">
        <small> {{ t('mailto') }} <a href="mailto:ismael@leamsigc.com" class="link">Ismael@leamsigc.com</a> </small>
      </div>
    </div>
    <div class="form-container grid place-content-center p-2 bg-gray-900">
      <div class="card text-center shadow-md">
        <h2 class="card-title">{{ t('register') }}</h2>
        <div class="card-body">
          <form name="new-business" class="max-w-md" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="new-business" />
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ t('form.name') }}</span>
              </label>
              <input placeholder="Name" class="input input-bordered" type="text" name="name" required />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ t('form.email') }}</span>
              </label>
              <input placeholder="email" class="input input-bordered" type="email" required name="email" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ t('form.address') }}</span>
              </label>
              <input placeholder="Address" class="input input-bordered" type="text" required name="Address" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ t('form.contact') }}</span>
              </label>
              <input placeholder="Contact" class="input input-bordered" type="text" required name="Contact" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">{{ t('form.description') }}</span>
              </label>
              <textarea class="textarea h-24 textarea-bordered" placeholder="Business description" name="Description"></textarea>
            </div>
            <div class="mt-8">
              <button type="submit" class="btn btn-block">{{ t('form.send') }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>
<i18n global>
{
  "en": {
    "title": "The directory of all Mexican Goodies is under construction",
    "language":"Language",
    "by": "Mexican-Goodies.com Made by",
    "soon": "Our webiste is opening soon.",
    "register": "Please register your business!",
    "mailto": "Have questins for me send me a email to",
    "form":{
      "name":"Name",
      "email":"Email",
      "address":"Address",
      "contact":"Contact",
      "description":"Description",
      "send":"Send",
    }
  },
  "es": {
    "title": "La pagina principa de el Mexican Goodies está en construcción",
    "language":"Idioma",
    "by": "Mexican-Goodies.com Hecho por",
    "soon": "Nuestro sitio web se abrirá pronto",
    "register": "Por favor, registre su negocio!",
    "mailto": "Si tiene preguntas para mí, envíeme un correo electrónico a",
    "form":{
      "name":"Nombre",
      "email":"Email",
      "address":"Dirección",
      "contact":"Contacto",
      "description":"Descripción",
      "send":"Enviar",
    }
  },
  "de": {
    "title": "Die Homepage von Mexican Goodies befindet sich im Aufbau.",
    "language":"Sprache",
    "by": "Mexican-Goodies.com Hergestellt von",
    "soon": "Unsere Website wird bald eröffnet",
    "register": "Bitte melden Sie Ihr Unternehmen an!",
    "mailto": "Wenn Sie Fragen an mich haben, senden Sie mir eine ",
    "form":{
      "name":"Name",
      "email":"Email",
      "address":"Adresse",
      "contact":"Kontakt",
      "description":"Beschreibung",
      "send":"Senden",
    }
  }
}
</i18n>
