export function inline() {
  console.log('Export nomeado inline');
}

// export default só pode um por arquivo e pode ser uma função anonima
export default function () {
  console.log('Export default inline');
}
