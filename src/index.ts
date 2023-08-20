import {bot} from './bot'
import {bskyAccount} from './config'
import {postRecord} from './const'

async function main() {
  await bot(bskyAccount, postRecord)
}

main()
