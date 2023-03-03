<template>

<div id="modal" class="flex justify-center align-center modal "
:class="addClassToModal">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow ">
            <button @click="closeModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 ">
                    Sectiginiz destinasyonlara ucusumuz bulunmamaktadir. Lutfen farkli destinasyonlari deneyerek ucus aramaya devam edin. 
                </h3> </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'FormModal',
    data() {
        return {
            isModalOpen:false
        }
    },
    computed:{
        addClassToModal() {
            return this.isModalOpen ? 'block' : 'hidden'
        }
    },
    methods:{
        closeModal () {
            const modal = document.getElementById('modal');
            modal.style.display = "none";
            this.$emit('close-modal',false)
        }
    }

}
</script>

<style scoped>
.modal {
  display: block; 
  position: fixed; 
  z-index: 1; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto; 
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); 
  
}
</style>