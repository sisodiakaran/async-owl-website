declare module 'vanta/dist/vanta.topology.min' {
  const TOPOLOGY: (options: {
    el: HTMLElement
    p5: unknown
    color?: number
    backgroundColor?: number
  }) => { destroy: () => void }
  export default TOPOLOGY
}
