import { computed, type Ref } from 'vue'

// Line & Text color
const defaultSeperatorClasses = 'w-full h-0.5 bg-gray-200 dark:bg-gray-700'
const defaultSeperatorTextClasses = 'px-5 text-center text-gray-500 dark:text-gray-400'


export function useSeperatorClasses (): {
    seperatorClasses: Ref<string>,
    seperatorTextClasses: Ref<string>
} 
{
  const seperatorClasses = computed(() => {
    return defaultSeperatorClasses;
  })
  

  const seperatorTextClasses = computed(() => {
    return defaultSeperatorTextClasses;
  })

  return {
    seperatorClasses,
    seperatorTextClasses
  }

}