import axios from "axios";
import callAPI from "./ExCallAPI";

// 取得対象のポケモンID上限
const all_poke_num = 20

// TODO: 暫定的にSVに登場するポケモンのID一覧を生成する

// func
const getAllPokeId = {
  async test(path) {
    console.log("test called")
    console.log(path)
    const ret = await axios.get(path)

    console.log(ret.data)
    
    return ret;
  },
  // get method
  async getPokeAllId() {
    console.log("getPokeAllId called")

    // id一覧生成
    const pokeIds = [...Array(all_poke_num).keys()].map(i => ++i)


    // const allPokeJsonData = await Promise.all(
    //   pokeIds.map((pokeId) => {
    //     const getPath = `${process.env.NEXT_PUBLIC_POKE_NAME_URL}/${pokeId}`
    //     console.log(getPath)

    //     const res = axios.get(getPath)
    //     // const res_name = callAPI.getPokeName(pokeId)

    //     // console.log(res_name)
    //     // console.log(res)

    //     // return res_name
    //     return res
    //   })
    // )
    const allPokeJsonData = await axios.all(
      pokeIds.map((pokeId) => {
        const getPath = `${process.env.NEXT_PUBLIC_POKE_NAME_URL}/${pokeId}`
        console.log(getPath)

        const res = axios.get(getPath)
        // const res_name = callAPI.getPokeName(pokeId)

        // console.log(res_name)
        // console.log(res)

        // return res_name
        return res
      })
    )

    // TODO: SVの登場する場合のみ

    console.log("disp data")
    console.log(typeof(allPokeJsonData))
    // console.log(allPokeJsonData)
    console.log(allPokeJsonData[0])


    // jsonデータの解析
    const retData = allPokeJsonData.map((data, index) => {
      console.log("loop data")
      // console.log(data)

      const test = data["data"].names[0].name
      console.log("test")
      console.log(test)

      // かな文字に変換
      const kana_str = test.replace(/[\u30a1-\u30f6]/g, (match) =>  {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
      });
      return {
        id: index + 1,
        value: kana_str,
        label: test,
      }
    })
    console.log(retData)
    
    return retData;
  },
  async get(getPath) {
    // id+日本語名の取得
    // const allPokeJsonData = await Promise.all(
    const allPokeJsonData = await Promise.all(
      pokeIds.map((pokeId) => {
        const getPath = `${process.env.NEXT_PUBLIC_POKE_NAME_URL}/${pokeId}`
        console.log(getPath)

        const res = axios.get(getPath)
        // const res_name = callAPI.getPokeName(pokeId)

        // console.log(res_name)
        // console.log(res)

        // return res_name
        return res
      })
    )
    return result.data
  },
}

//callAPI.getAll();

export default getAllPokeId;