'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2f0751c16f29cbdbce413ea690857b42",
".git/config": "0e8cf4476345c3564f92ccdc235a5a22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d2ea3311061f5be71397f6ccf22d7eba",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f84b06bec1765d518cdb8e4cb554585",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d0cc8a8dc5481c5e424903192c326b6",
".git/logs/refs/heads/main": "5623d004f353b9467fdd565035d65983",
".git/logs/refs/remotes/origin/HEAD": "f7ecbe7d3b598f2195707e99df56de42",
".git/logs/refs/remotes/origin/main": "fffb32b55f0e02175023f8d7eba0a976",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/80f38dfcbe97adcd3174d37965e4450c0c89ab": "34f8e1a6e947e7981202a1c00fa10800",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/29530ce5e4ff8d42e0a4aac013c5902a97a4e9": "001b9ea2c741b6cd1f241bcb7fade172",
".git/objects/07/2ed1be482a41e8d3e63d081e41c8e5f1a0e9e1": "c6b46b994d67a4ec68cfe33b094083ec",
".git/objects/09/2c386b2744aaa1df54a92118cd472767eb85ea": "1d59adc283fea67ec9401037db1b2afc",
".git/objects/09/d7a7a1ae619e4696554bac36d3f00f68b27a35": "db1144120819237e6fc631830e4f105b",
".git/objects/0a/5ac84d0f20cb8b570c92eaf372f1d49a765f77": "1473b086c05faf77486baeead495fc0c",
".git/objects/0a/c4fd9eb1adfc27a9aa651eb8689964c5c8b4e2": "3f61b8b0f2aedb52a74a79187c8d2ee6",
".git/objects/0a/c896dcec6a253266ee25290ad546899876e0ae": "50eab868c5ee4751577ab6c84a84206a",
".git/objects/0c/9faff28d187b217942e8cfa2d880ddd481b389": "0848239de9f77d9171953b35101f8fcd",
".git/objects/0e/abe6abb5b9cd0b8a4af6749880cd17cd32cfc2": "9d5a96349b43ecae6a4d64779bfa330c",
".git/objects/0f/1ba7b71f89203ea99465361e82aae04d98d61c": "adaec57f0c20e595ea15bdef2c3063a7",
".git/objects/0f/98e97de290026bf8e6c55d75309b75c73d4b09": "2f2a5e87ce77764ac421bdd2cfded5b1",
".git/objects/10/25f8bb40de5dcaf8624c4715118628d032fa3c": "ac11efa0f0b54fcc1e4f44b8d476b31a",
".git/objects/10/c21d9af46acac374ece0de89464d889b2f0226": "9054a660402bb78eeb51d9ad70cbe2de",
".git/objects/10/ff8c57ffe1b4fc5f839dd1b2c756b5ef7a45d7": "f14879e62e4b89bfe43765e3ec70399e",
".git/objects/12/99b21569c954d85d9da28164c56cb96ee74265": "7076bb8dca3f38cad2bd28c196fa57f9",
".git/objects/16/6c1acba35fde50d62c7c3a93ae96e1f5488c0b": "e4c885b3280adb129ddf5708656b40af",
".git/objects/19/66c7815e1d142ddb52b2f6c937f54a6449e811": "07bdf9af8c6f63aff6c4db7644426cd0",
".git/objects/1c/132362952e1969bfcac120a04c105c30f286f7": "30d3a7955cf3d71bc8dcca34b664dab6",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/54b21fad994588226223f6b038fb930eedf355": "a566d81d94c4c899e7826047c8dae4a1",
".git/objects/28/bf3698cfbd63d906d11f613b6da9b7fc527aac": "689fdf6783007d4e4230b79efaba7092",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/564796d0b7c7999fb0d7398327368c3615334e": "5c818d5390b0d92e4d18887e4779160d",
".git/objects/2b/5d10e641f63b00b5291a9036c8bbb285ff6796": "6dba8aee61a56d7769d86fd983e3bab8",
".git/objects/2d/1e500dd1ad809779daa5b8cc58d9c2ad20871b": "ba5ccc4f38a08b133dbf991b4c8e99a2",
".git/objects/2f/63b92a71b7f64788724d9dbea132209ba060c9": "4e5d9738423b8459d6f48df76e9af88d",
".git/objects/30/a2fffce2f491f4d398d4b25bf928b7d20510c6": "2d32e5fab8580011f5f4e504fd12df79",
".git/objects/33/f3ceb641ae7d6bcd497a7070617e6cf9370edc": "b54063a9a9a78ed418744b38f9e36c22",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/35/9e947b2e4c00e77d8fb5c0b49b101c0103fa4e": "1e61d7bce3d150ef62fa0be16558c29b",
".git/objects/37/b14f711e49bfa7be80fa9a8a8838e38ce540ff": "60b6fbdbebcf4bac55a03ded97d873c9",
".git/objects/3b/c0db1ef5ac958feaadc3f32c10fdca106032ea": "41ddc440a19dace50747ff77ee0f78b9",
".git/objects/3d/ab2942a93b214a4454b9cc73f4bab891f3821b": "e9c38096c76efaceeb1972220bd0670f",
".git/objects/3f/6f68de60cbf24c5ddfb9360b44658533c907bb": "d79dbde98acf278b2b55799027d888ba",
".git/objects/45/eb8b3bd41af32aecf154824b962e5f5db1cb7d": "f0ab72f2565ea91192dccf40ffb1fee7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/83f58d6e13705a0776ec20fd78b226a56d6179": "1dce64036cb09ba1c6eb22db5904b192",
".git/objects/4a/193241e6da8e5418176de33681745c62456b87": "5919072dd3401e29aeb4ef66f914afec",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/1ecd2b5056749b579e0ab6fbc60fa907c4cfe0": "7cc2f8308dcbc84424ad17eebb31f5d9",
".git/objects/52/b5f2a9bd666e6b55642235d887829b9a960778": "ac0ec1d5b904f7390b2dbd7d0ebe366a",
".git/objects/57/eadf6da1264b95b12fafc5115c07118f7025ef": "5e9c642ec76e97a52d631a9050b167f1",
".git/objects/58/1f1bdc1ecc3f0a8462e86a06b1be212ea254ad": "fde32a388ea48ad1c43e74396648df43",
".git/objects/5a/1336006278a5ae32d09b0526f6259131a6e86f": "202231ff322c0f3b362c9ae23ea0c882",
".git/objects/61/b4a7ba8ca4e5106082fea5041ce96582aec692": "5ed34ae4b073d293e3eb0a75cac6047c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/b38e26f5c49b43a7e15ddc5d920f174daf255f": "5c1f3fc4f8524134458b09431e75d5e9",
".git/objects/6b/c75f43248c96251f6a86d805960ca4c6d2cca3": "0ae8a6411a2d1837a983d42df4018fca",
".git/objects/6d/2b879d6383ae31ecc2ca29b6d962895d6087b3": "b949f52afc069d26880cfba6393e9a24",
".git/objects/6d/69224ec6a16ab59a69baaa17036cd45d113289": "84113eedb71610fd27b463894a68eb8e",
".git/objects/6e/b7579d15fcd6fbccaadf900b61b62483a11c42": "f572c3a44c945e7cf812724b8d985382",
".git/objects/70/0c9f5d7bd793619cd6ef456708880aa30bc6c2": "c7819a6d595080ddd36908eccec60644",
".git/objects/71/ef5a98b8012c253d4468dc1fd2fd4696122e87": "e5bdf154e2748c4d8785957606873eb9",
".git/objects/76/3f74d2a2df77edc63c8743c076e6d493c385ba": "9070aac03cadc2a251c982eb49c90375",
".git/objects/78/1a491253a95ea0e415d006f31b537a54ff6b81": "b75b66ce400293d829f6b31965989e83",
".git/objects/78/917fb6f20d7a84290297b9ef402cf08afa318a": "7979db8a92b6cbaec6ae39fa9767015b",
".git/objects/79/ef484f6e258ad7b3dc01bba92b3e491f3ea321": "f13cdce94008da1eb1e24de00bacc7b1",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/eda482ade9cc6d45c43d85ccdf3f4b1d181f8f": "ee2efde0a1d519273e05eeea5cdb940a",
".git/objects/82/89511fc75c44fae886b3951645606529cb5522": "157127c8e7a4f1c749757ba9380eda4f",
".git/objects/83/e2d2f7c77bfb6ac7e1785d039b319b36458fb1": "27d3a864e5f69463b0bd6a456be7cdb6",
".git/objects/83/f21ba90a60c0f21e9f80ce5da99bd330fb9ac3": "3f1ac35d547a4e8756c10a3a98bc0e73",
".git/objects/85/88c914a1748ebdbd04e5e5d3911092e2611671": "8fcce2956ee204d8b4b086381dca2fbe",
".git/objects/86/43826b9ec62640bf37f8b36c4fa4a46792281e": "cc5ef78a6c0abc79f34c669ce55b7026",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/20d72f4ce1c642e2b82b1af135ea4eccc8a915": "3cda059336d537ceaa84f809d4a32c5a",
".git/objects/8a/55784006bd4afc40b773b6eb438203fdcbc045": "d557e4581486e720f41406d5ab7333bb",
".git/objects/8a/a0e3624d1f441c943a67cd51eca19fd4b6a732": "a2da9601b2cefdf4eccfa8549758c27d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b019e007b95d2a300d3dd3c3d1e5e6f3f4d932": "c5b89acb290aab3b7f4fa41a8412e610",
".git/objects/8d/76f5d57b6c03e017bee33d3f6d834d1db2178b": "005d5a565228f3d10a0d54a35c37176a",
".git/objects/8e/2cb250c0942504940a4256309fc1d2c36f63ce": "58af09075ef1ad806e2cc6aaf4f923ec",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/5ae37893d454c7120f105ec2a199c3ad14499c": "02522cbf97e0bf8a3c1ccf66e2d99e6c",
".git/objects/97/56561b5c7c2051eba2b13a6084c0b605e3ccc1": "3411c404fad557b63c31dc278b6be2f4",
".git/objects/97/a13043148cc68636526811d40723da3a6746f6": "e3e66f9d6c1dde1ba426659d23626534",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/0002c4d456f934240fd46e8715105791c217de": "028487d03688a4dc0ce1bcdc2807c9cf",
".git/objects/99/00f4921f1fb1594f6e39594739523c38a37a06": "de1338ffe6ac268caaf024641f180f41",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/21af1da97a3fae0225f594aff52ae6ddf8256e": "d5abba44ea9529064eee0a0f71c27cde",
".git/objects/9d/cfdc25e284f1bc4ec2e6154dcff73ec4c34188": "7676d952fb5114ca6ebb05df1d95ef53",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a1/f5d6babc00766095b3c275e9d1b29f1114e562": "ca0df0d062fac305ae050bfeb0735442",
".git/objects/a2/9a09e2bc9b036bcd1cc7e037afeea8feff50fc": "9c56c46ccd16d958c6462074ad72bd3c",
".git/objects/a9/7ca8df59a11a3aaa9bc9bc53affe23629b54ca": "a11aa549abcdb580d828467f8b56e0e3",
".git/objects/aa/7d25fcfca2d708052baf9ebe528356b1c2655f": "f088bd76a004c257a787c8187188bf3a",
".git/objects/aa/f56cff2388cdaef3efb47a5a0176ffd287f3d6": "498395eb09b8b89c2b50f493f45035d4",
".git/objects/ab/482abb7edc8912782658421b5c8fd3c6594ec9": "0e5402e54b648b3c3e0406b16e46d4e5",
".git/objects/ab/86cec09c33080be108dabee218849d3888db09": "556f49a89a6132c1425922b6966abd8c",
".git/objects/b1/34488d6583d731d3c4749bad64a388f7ea25b4": "1eab2152100fec95aaacd6afd77ebb2a",
".git/objects/b4/71227c8b1a6735306d1f52f3ed0e8f3aeb8d27": "a6653f73ffefba69c5ce4fa5007c473b",
".git/objects/b4/d38038b1d4b8194ea13d299859e6a1e4b78756": "32ab87f92636180ca31dbaf9865eb35c",
".git/objects/b4/df2de97e0d1d529d285ec1af0fa6e262602403": "01b83980e5d5a72e49510cb4149cc100",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/38c142001eacc4889779db8bb32f85b9dcfc63": "bedfb59f22960c8450fc7256a48eeaed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/b223253ec556e1dcaaf74aaba4570cb0321449": "aaa22c054e6a624e96e4a8b42468c77e",
".git/objects/be/32faa33b18b88a9291bc234e1428ad33f29c8a": "86593d0a100fa757442980201abee7a9",
".git/objects/c2/0a5880b66316762b9614b348ff8e4c7a69ce13": "1e934bae8f1bef9d036a61c86dcf7526",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c9/5d8535c2382363f86cd4eaa642458a1ac2276a": "24729224f7cf71506f8e48850b47de47",
".git/objects/c9/dcb757a6d07573f09c00dcda52493fd88db045": "aac34f958f42033b338721fef0d48465",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/ca/f1e136dbadee64dd17939adb038de9b51a82b1": "912f3baa2a9021fc268ae9b479ac73f7",
".git/objects/cf/3a2b1805d7c679bfc1045ed9892fbf92902ca0": "d9d3e1d148f66445e79af46cc431ddd3",
".git/objects/d2/7990bec7623529803ed93e60da8363268b3e23": "02a0eeacba308dd1a8cabe6fc7e73ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ce83fedad99499d78d93dee5248ecdc7fccb4f": "021acfbd8093f6cdd209b480120605cc",
".git/objects/d6/d458420ad01423392160a2efde96b1ce2dbf64": "1e25c67371c0a830295513ab663d5bba",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/530249e56945569a326dbe6783a42015eebac9": "26cd988732b94036850bbe74231378cc",
".git/objects/e0/9c3356e4c0421af85032d794774ae9f5d8ad4a": "c54e42e99bf8d4b617656f2683fb92fd",
".git/objects/e1/2ca3bf37ad431b14d9d5d418b9c730b37622b4": "4090d7faecbd0c36abf1681ca1681d0d",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/0e008d0056869e8582665ffc4b593575a86129": "2f2e1d9be9de513cbdd0bf6bc3910369",
".git/objects/e8/7021a3c41c3ba49da43dfc8a82648284f5392b": "9707a0b164579c5cb52faff63fd344d8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/a7e25a9cdf8f059f870c8559af0ce79da3fc4d": "3ce7b2f491ff4ebe06641af17927b153",
".git/objects/e9/d3aa240ad8cd3db34809445cc16e745be04978": "fab49a32d06f8255e46d3578b63f2cb5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/6c01b21d7cad2dded3244071c585c435bf3ffb": "c477735c4e9c0350879d903cff62f6bd",
".git/objects/ee/77bda730212c41ebfa4cfe869ce61ad6d0aaa0": "2c19c4485fdcc673883273cceef87754",
".git/objects/f0/e457762c30a43894127eb90997af55cc94d32e": "b7487c82366ef5dfc0a348adb4e7dd32",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/94910ee9789ff0c9ad2b79c12e0ae7d1c8d146": "5028276bfc0d413bf07f5490fad8ffe2",
".git/objects/f9/39ffd211cbe8bff0143d10b905aaa077c4c32e": "f19999274ffb94877c7230f0d0536bb2",
".git/objects/fd/4cf872494b2906bd96c0e0a0b530cbc727c18f": "87278e03baca5b5b60f6b151c15cddec",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/833672402f6fae26e74d958cadd2b3e9eb1e19": "8ba1a76945db1cfd54142d9c51c03308",
".git/objects/ff/5f2d268b3750fe2f07dca6dac84c927d013c39": "6f8a9dcf27a27430ea57eacf0c698d97",
".git/objects/pack/pack-03ef0dbd4a76aea1f151f89b02785f1093d49577.idx": "0a9e12f2d20e5cc9a939a9e060e95bfd",
".git/objects/pack/pack-03ef0dbd4a76aea1f151f89b02785f1093d49577.pack": "af38b4fa2a5f473b45c59e9b3a89302f",
".git/objects/pack/pack-03ef0dbd4a76aea1f151f89b02785f1093d49577.rev": "20e5d3991265a22801ccf1484038ca4f",
".git/packed-refs": "912642cda3294cdcbb5dc90d431754b6",
".git/refs/heads/main": "6bacb40dd7cfa69930e7052bcc50115b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6bacb40dd7cfa69930e7052bcc50115b",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d14f50e901e633ebfeebdd7ce71b4225",
"assets/NOTICES": "57c8fbcd099d12b1403e8bfcbdb7792e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9f85f5b4b5ebabf687486c94fa77d2e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "afdd5f2efc50f4258390901e41fe2e03",
"/": "afdd5f2efc50f4258390901e41fe2e03",
"main.dart.js": "562194899f6a24b86016318ae9f25b63",
"manifest.json": "07b3bb11056ca8266585cf6e3ea4c313",
"version.json": "4133d3292db54e80f00fe8e7faa061a9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
