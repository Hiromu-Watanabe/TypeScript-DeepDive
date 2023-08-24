/**
 * - type aliasとinterfaceにはほとんど違いがない
 * - interfaceを使うメリットはinterfaceで定義されているものは必ず型だと分かる点
 */

// type aliasはなんでもいける
type HumanType = {
  name: string
  age: number
  greeting(message: string): void;
}
// ユニオン型とかを使いたい場合はtype aliasじゃないとダメ
type HumanType2 = {
  name: string
  age: number
  greeting(message: string): void;
} | string



// interfaceはオブジェクトのみ
interface HumanInterface {
  name: string
  age: number
  greeting(message: string): void
}
// interfaceはオブジェクトじゃないとエラー
interface HumanInterface2 {
  name: string
  age: number
  greeting(message: string): void
} | string