<template>
  <div class="flex items-center">
    <div :class="seperatorClasses"></div>
    <div :class="seperatorTextClasses">{{ props.text }}</div>
    <div :class="seperatorClasses"></div>
  </div>
</template>

<script lang="ts" setup>
import { useSeperatorClasses } from './composables/useSeperatorClasses'

interface SperatorProps {
  text?: string,
}

const props = withDefaults(defineProps<SperatorProps>(), {
  text: 'or',
})

const { seperatorClasses, seperatorTextClasses } = useSeperatorClasses()
</script>