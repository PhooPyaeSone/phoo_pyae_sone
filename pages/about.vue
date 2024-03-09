<template>
  <div>
    <NuxtLayout name="page">
      <img :src="TopImage" class="w-full h-28 rounded-xl object-cover"/>
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
          Hi, This is Phoo. I am an enthusiastic full-stack software developer 
          who gets motivated by experience and passion for programming above all 
          and also a problem solver who has no objection to switching technologies.
        </SectionParagraph>
        <SectionParagraph>
          I hold a Bachelor of Computer Science (Honurs) and received 
          the Outstanding Student Award from the India-Myanmar Center 
          for Enhancement of IT Skills.
        </SectionParagraph>
        <SectionParagraph>
          I worked as a junior full-stack Laravel developer for Marketplace Web application 
          at <LinkBtn link="https://www.bits-manager.com/" text="Bits Manager"/>. I developed and maintained the job portal web apps 
          for <LinkBtn link="https://web.facebook.com/MSmanagementconsultingmdy" text="MS Management Consulting"/> China based Myanmar Company. 
          I developed it from conception to deployment with my junior developers. I also mentored them on best practices.
          So, I have over three years of hands-on experience with Laravel, 
          accomplished by JavaScript frameworks to develop web applications. 
          I was excited about integrating the Payment Gateway API and
          deploying the Project with Domain Name System (DNS) and designing the
          database based on the business requirements.
        </SectionParagraph>
        <SectionParagraph>
          As a developer who wants to be a full-stack developer,
          I decided to explore the mobile development that is Flutter,
          as well as cross-platform app development. 
          I worked as a junior flutter developer for <LinkBtn link="https://asgardianlabs.com/" text="Asgardian Labs(TwinRock)"/>.
          I developed E-learning apps for security officers at TwinRock Company. 
          The courses are mainly related to the security firm. 
          I was a team player for THOR, an all-in-one Security Operations Management Portal 
          built for the Singaporean Security Agency. One favorite feature of THOR that 
          I developed is reading and writing the latitude and longitude of site locations 
          through NFC tag integration. Plus,OCR technology efficiently scans and detects text on Singapore license plates.
        </SectionParagraph>
      </div>
      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
      <div class="flex flex-col gap-5">
        <SectionTitle>Work</SectionTitle>
        <NuxtLayout name="section">
          <WorkListItem v-for="work in works" :key="work.id" :work="work"/>
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import {useWorkStore} from "../store/workStore";
import TopImage from "../assets/imgs/about-image.jpg"

const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
