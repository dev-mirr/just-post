export function LogInterceptor(prefix: any) {
  return (config: any) => {
    console.log(prefix, config)

    return config
  }
}
