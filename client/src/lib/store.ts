import { writable } from "svelte/store";

export const isLoading = writable(false)
export const isLoadingForm = writable(false)

isLoadingForm.subscribe((value) => {
    console.log("store : isLoadingForm:::", value);
}); // logs '0'