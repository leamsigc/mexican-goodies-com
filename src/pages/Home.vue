<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  useScope: 'global'
})
</script>
<template>
  <div class="min-h-screen bg-base-300 py-10 px-2 md:px-0">
    <div class="max-w-5xl mx-auto text-center">
      <h1 class="my-5 text-5xl font-bold">{{ t('home.title') }}</h1>
      <h2 class="mb-5 max-w-lg mx-auto">{{ t('home.subtitle') }}</h2>
      <p class="mt-10 text-xs max-w-4xl mx-auto">
        {{ t('home.desc') }}
      </p>
    </div>
    <h3 class="mt-40 text-4xl font-bold text-center">
      {{ t('sponsor.title') }}
      <svg class="inline-block" width="30" height="48" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.9883 0.656272C17.5664 1.03127 14.2852 7.54299 14.2852 7.54299L11.8438 17.3906L21.3437 16.5196C21.3437 16.5196 29.2461 1.82424 29.4062 1.4844C29.6914 0.86721 29.8437 0.613304 28.7539 0.613304C27.6641 0.609398 18.3828 0.30471 17.9883 0.656272Z"
          fill="#176CC7"
        />
        <path
          d="M22.9062 15.9102C22.4336 15.6562 8.51169 15.4375 8.18357 15.9102C7.88669 16.3398 7.92966 18.3047 8.07419 18.5586C8.21872 18.8125 12.8984 20.9883 12.8984 20.9883L12.8945 21.7812C12.8945 21.7812 13.1523 22.4023 15.7617 22.4023C18.3711 22.4023 18.6406 21.875 18.6406 21.875L18.664 21.0742C18.664 21.0742 22.7617 19.0273 22.9765 18.8477C23.1953 18.6641 23.3789 16.1641 22.9062 15.9102ZM18.6172 19.1641C18.6172 19.1641 18.6054 18.6172 18.3359 18.4805C18.0664 18.3437 13.7265 18.3672 13.3593 18.3867C12.9922 18.4062 12.9922 19.0625 12.9922 19.0625L10.0234 17.6172V17.3281L21.0781 17.4062L21.0976 17.7344L18.6172 19.1641Z"
          fill="#FCC417"
        />
        <path
          d="M14.1484 18.9883C13.7812 18.9883 13.5703 19.3711 13.5703 20.0313C13.5703 20.6484 13.7812 21.168 14.2461 21.1289C14.6289 21.0977 14.7617 20.5117 14.7266 19.9922C14.6914 19.375 14.6133 18.9883 14.1484 18.9883Z"
          fill="#FDFFFF"
        />
        <path
          d="M2.32031 34.4375C2.32031 43.7969 10.7813 47.9648 16.4063 47.7656C22.6094 47.5429 30.0391 42.707 29.5898 33.7773C29.1641 25.3164 22.0469 21.3047 15.8828 21.3476C8.71875 21.3984 2.32031 26.2617 2.32031 34.4375Z"
          fill="#FCC417"
        />
        <path
          d="M16.2071 46.1367C16.1094 46.1367 16.0078 46.1367 15.9102 46.1328C12.9805 46.0352 10.086 44.8008 7.96877 42.75C5.70315 40.5547 4.46096 37.5859 4.47659 34.3945C4.51174 26.6016 11.3242 22.9883 15.9453 22.9883H15.9844C22.2461 23.0156 27.3867 27.8828 27.5313 34.4805C27.5938 37.418 26.3906 40.5 24.0313 42.8203C21.8281 44.9805 18.9063 46.1367 16.2071 46.1367ZM15.9375 24.2852C11.793 24.2852 5.66409 27.6758 5.64846 34.3945C5.63674 39.418 9.52737 44.582 16.0078 44.8008C18.4766 44.8789 21.0196 43.9336 23.0742 41.9141C25.2071 39.8164 26.4063 37.1133 26.3633 34.4961C26.2696 28.8203 21.6289 24.3047 15.9961 24.2813C15.9805 24.2813 15.9492 24.2852 15.9375 24.2852Z"
          fill="#FA912C"
        />
        <path
          d="M13.5859 22.6757C13.3164 22.3047 10.2617 22.375 7.375 25.1953C4.58984 27.9179 4.28906 30.4843 4.82422 30.6328C5.42969 30.8007 6.16797 28.082 8.71875 25.7968C11.0625 23.7031 14.125 23.414 13.5859 22.6757Z"
          fill="#FEFFFA"
        />
        <path
          d="M25.4024 32.7812C24.461 32.914 25.4375 35.7343 23.2539 38.8906C21.3594 41.6289 19.211 42.6211 19.461 43.2226C19.7969 44.0273 23.2383 42.0234 24.8321 38.7578C26.2774 35.8008 26.1055 32.6797 25.4024 32.7812Z"
          fill="#FEFFFA"
        />
        <path
          d="M12.8164 29.0859C12.6133 29.3867 12.7969 32.0234 12.918 32.1406C13.1523 32.375 14.9336 31.5352 14.9336 31.5352L14.8672 38.5859C14.8672 38.5859 13.5586 38.5703 13.4219 38.6211C13.1523 38.7227 13.1875 41.4414 13.3867 41.5742C13.5859 41.707 18.9258 41.7774 19.1289 41.5078C19.332 41.2383 19.2812 38.8594 19.1875 38.75C19.0195 38.5469 17.7422 38.6289 17.7422 38.6289C17.7422 38.6289 17.8515 28.2461 17.8164 27.9141C17.7812 27.582 17.414 27.375 16.9765 27.4766C16.539 27.5781 12.9453 28.8906 12.8164 29.0859Z"
          fill="#FA912C"
        />
        <path
          d="M0.964827 0.453105C0.718733 0.679667 10.1289 17.4375 10.1289 17.4375C10.1289 17.4375 11.707 17.6406 15.2305 17.6719C18.7539 17.7031 20.5 17.4687 20.5 17.4687C20.5 17.4687 13.1836 0.621073 12.7461 0.453105C12.5312 0.367167 9.6328 0.335917 6.80077 0.304667C3.96483 0.269511 1.1992 0.234355 0.964827 0.453105Z"
          fill="#2E9DF4"
        />
      </svg>
    </h3>
    <div class="max-w-full md:max-w-4xl mx-auto mt-10 overflow-hidden relative">
      <div class="absolute -top-8 right-5 w-5 h-28 bg-yellow-400 -rotate-45"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 md:card-side bordered mx-auto bg-black rounded-box">
        <div class="h-full opacity-40 md:opacity-80">
          <img src="/img/mexican-goodies-gold.jpg" class="image-full img-responsive w-full rounded-tl-md rounded-bl-md" />
        </div>
        <div class="card-body">
          <h2 class="card-title text-blue-500">
            {{ t('sponsor.gold.name') }}
            <div class="badge badge-warning mx-2">GOLD</div>
          </h2>
          <p class="font-light text-xs">{{ t('sponsor.gold.type') }}</p>
          <p class="font-light text-xs">{{ t('sponsor.gold.contact') }}</p>
          <p class="font-light text-2xs my-2 mb-5 opacity-60">{{ t('sponsor.gold.desc') }}</p>

          <button class="btn btn-primary btn-sm">{{ t('sponsor.gold.btn') }}</button>
        </div>
      </div>
    </div>
    <section class="text-gray-100 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col w-full mb-20">
          <h3 class="mt-40 text-4xl font-bold">
            {{ t('populars.title') }}
          </h3>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4" v-for="number in 12">
            <div class="flex relative rounded">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded opacity-70" src="https://dummyimage.com/600x360" />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-0 hover:opacity-100 rounded transition-opacity ease-in-out">
                <h2 class="card-title text-blue-500">The bussines</h2>
                <p class="tfont-light text-xs font-medium mb-3">Shooting Stars</p>
                <p class="font-light text-2xs leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <button class="btn btn-accent btn-sm mt-5 btn-block">{{ t('sponsor.gold.btn') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<i18n global>
{
  "es": {
    "language": "Language",
    "home":{
      "title":"¿Mexicano viviendo en Alemania?",
      "subtitle":"¿Te has preguntado donde puedo encontrar tu producto favorito?",
      "desc":"Aquí te traemos la lista más completa, actualizada de negocios mexicanos  en Alemania, donde puedes encontrar todo lo que necesitas. Desde una piñata hasta donde está el mejor restaurante mexicano y más auténtico en tu área. "
    },
    "sponsor":{
      "title":"Negocio especial del mes",
      "gold":{
      "name":"Valentina Piñatas",
      "type":"Piñatas",
      "contact":"In der Hohl 10, 35753",
      "btn":"CONTACT",
      "desc":"Somos una empresa joven que se fundó en julio de 2013.¡Nuestro trabajo es diseñar y fabricar hermosas piñatas! En eso estamos especializados y ponemos mucho énfasis en el diseño, la calidad y el rendimiento. Todas las piñatas están hechas a mano con gran atención al detalle."
      }
    },
    "populars":{
      "title":"Negocios más populares"
    }
  },
  "de": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>
