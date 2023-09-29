declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '@vuelidate/core'
declare module '@vuelidate/validators'
declare module '*.json'
declare module '*.jpg'
declare module '*.svg'
declare module '*.png'
declare module '*.mp4'
declare module '*.webm'
declare module '*.ts'
