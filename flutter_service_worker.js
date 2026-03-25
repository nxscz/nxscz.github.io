'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b27e31a2e14febd4e94de485273a6b53",
".git/config": "0e8cf4476345c3564f92ccdc235a5a22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "023d332f44123316e8843b74876d7721",
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
".git/index": "84aad339343f7487dbfc90b2c86373f1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3840dd9a08b0acdb5088e7973a020279",
".git/logs/refs/heads/main": "6fff7cf3d11bdd081b1b68dd3365f33d",
".git/logs/refs/remotes/origin/HEAD": "805fbf3b9bf792a08341cca34320e733",
".git/logs/refs/remotes/origin/main": "ac31409468a85bafbae9c302656ff982",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/80f38dfcbe97adcd3174d37965e4450c0c89ab": "34f8e1a6e947e7981202a1c00fa10800",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/29530ce5e4ff8d42e0a4aac013c5902a97a4e9": "001b9ea2c741b6cd1f241bcb7fade172",
".git/objects/07/2ed1be482a41e8d3e63d081e41c8e5f1a0e9e1": "c6b46b994d67a4ec68cfe33b094083ec",
".git/objects/09/2c386b2744aaa1df54a92118cd472767eb85ea": "1d59adc283fea67ec9401037db1b2afc",
".git/objects/09/d7a7a1ae619e4696554bac36d3f00f68b27a35": "db1144120819237e6fc631830e4f105b",
".git/objects/0a/4a2fd4eade54026a959c4588674fdd3ea99c61": "b922cb6ac5b04b1226998c6ddea4fdfa",
".git/objects/0a/5ac84d0f20cb8b570c92eaf372f1d49a765f77": "1473b086c05faf77486baeead495fc0c",
".git/objects/0a/c4fd9eb1adfc27a9aa651eb8689964c5c8b4e2": "3f61b8b0f2aedb52a74a79187c8d2ee6",
".git/objects/0a/c896dcec6a253266ee25290ad546899876e0ae": "50eab868c5ee4751577ab6c84a84206a",
".git/objects/0a/d2b19c4443061166255af2cf6103d813ad7944": "d34b0a164ac6a705935ef350405696a3",
".git/objects/0c/9faff28d187b217942e8cfa2d880ddd481b389": "0848239de9f77d9171953b35101f8fcd",
".git/objects/0e/abe6abb5b9cd0b8a4af6749880cd17cd32cfc2": "9d5a96349b43ecae6a4d64779bfa330c",
".git/objects/0f/1ba7b71f89203ea99465361e82aae04d98d61c": "adaec57f0c20e595ea15bdef2c3063a7",
".git/objects/0f/98e97de290026bf8e6c55d75309b75c73d4b09": "2f2a5e87ce77764ac421bdd2cfded5b1",
".git/objects/10/25f8bb40de5dcaf8624c4715118628d032fa3c": "ac11efa0f0b54fcc1e4f44b8d476b31a",
".git/objects/10/c21d9af46acac374ece0de89464d889b2f0226": "9054a660402bb78eeb51d9ad70cbe2de",
".git/objects/10/ff8c57ffe1b4fc5f839dd1b2c756b5ef7a45d7": "f14879e62e4b89bfe43765e3ec70399e",
".git/objects/12/99b21569c954d85d9da28164c56cb96ee74265": "7076bb8dca3f38cad2bd28c196fa57f9",
".git/objects/13/60a277e203c4108ee197da5fbd0b4b1719a7a1": "57d7677098bdb7a5d8f0b816e7976485",
".git/objects/13/c9543cb640569509d954af02a273ec6ccd5e64": "fcc4899c41513873dcd3046e5dd529f6",
".git/objects/16/6c1acba35fde50d62c7c3a93ae96e1f5488c0b": "e4c885b3280adb129ddf5708656b40af",
".git/objects/19/66c7815e1d142ddb52b2f6c937f54a6449e811": "07bdf9af8c6f63aff6c4db7644426cd0",
".git/objects/1c/132362952e1969bfcac120a04c105c30f286f7": "30d3a7955cf3d71bc8dcca34b664dab6",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/54b21fad994588226223f6b038fb930eedf355": "a566d81d94c4c899e7826047c8dae4a1",
".git/objects/27/c40ed1d603665756e4d4c98b63b57caa6f6a18": "6478f7c2bfa828c7a7a70f9182feacb4",
".git/objects/28/bf3698cfbd63d906d11f613b6da9b7fc527aac": "689fdf6783007d4e4230b79efaba7092",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/564796d0b7c7999fb0d7398327368c3615334e": "5c818d5390b0d92e4d18887e4779160d",
".git/objects/2b/5d10e641f63b00b5291a9036c8bbb285ff6796": "6dba8aee61a56d7769d86fd983e3bab8",
".git/objects/2b/d11e31717e47ea1f7634ef73419406637c8bcd": "4eae8c631424ef73e913171f6d8f153b",
".git/objects/2c/2dd9a185e4b5c941b89b28e1997908d0b5f987": "fdac5f09a6bc442b62428400cff1cd7f",
".git/objects/2d/1e500dd1ad809779daa5b8cc58d9c2ad20871b": "ba5ccc4f38a08b133dbf991b4c8e99a2",
".git/objects/2f/63b92a71b7f64788724d9dbea132209ba060c9": "4e5d9738423b8459d6f48df76e9af88d",
".git/objects/30/51fdb73e47d545178c75628b11b793b8aa1ba7": "390b515cc22331986f32dacd9aec5b9b",
".git/objects/30/a2fffce2f491f4d398d4b25bf928b7d20510c6": "2d32e5fab8580011f5f4e504fd12df79",
".git/objects/33/f3ceb641ae7d6bcd497a7070617e6cf9370edc": "b54063a9a9a78ed418744b38f9e36c22",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/35/1a5666f6357afd2633d6bfa7386400ae9de3a5": "4748014a78cfeeffb18e662bb619fe92",
".git/objects/35/9e947b2e4c00e77d8fb5c0b49b101c0103fa4e": "1e61d7bce3d150ef62fa0be16558c29b",
".git/objects/37/b14f711e49bfa7be80fa9a8a8838e38ce540ff": "60b6fbdbebcf4bac55a03ded97d873c9",
".git/objects/3b/c0db1ef5ac958feaadc3f32c10fdca106032ea": "41ddc440a19dace50747ff77ee0f78b9",
".git/objects/3d/ab2942a93b214a4454b9cc73f4bab891f3821b": "e9c38096c76efaceeb1972220bd0670f",
".git/objects/3e/7e91812ead7b2e7690a7121fd11507a0fcf6ef": "b9e3e4e01abb0dbd81ca566d8cfea879",
".git/objects/3f/6f68de60cbf24c5ddfb9360b44658533c907bb": "d79dbde98acf278b2b55799027d888ba",
".git/objects/42/5c985ec433d138935be816f2a4d781d5aed459": "8634e38aa0a643a5796b058c01160b8b",
".git/objects/43/3616e6c18199a10ebf6c9d5c7e4b280cf00b13": "f69c7bf9adf786087f0e9773335a3811",
".git/objects/45/6cd6f272a71044ace1978fbd515386bdd34b37": "8971d18aac14fe9e7b8938d16793ae21",
".git/objects/45/eb8b3bd41af32aecf154824b962e5f5db1cb7d": "f0ab72f2565ea91192dccf40ffb1fee7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/83f58d6e13705a0776ec20fd78b226a56d6179": "1dce64036cb09ba1c6eb22db5904b192",
".git/objects/4a/193241e6da8e5418176de33681745c62456b87": "5919072dd3401e29aeb4ef66f914afec",
".git/objects/4c/7673d8d1060d1c364f74c3a7f33e40268e3796": "0110a5ac7f5bf899b825ad351fdc1971",
".git/objects/4c/d7106be0f9e1c73a4dadc43fac37550fe557ad": "d81fe65227fc306b6df464d946840978",
".git/objects/4d/0703527d6d5bb43fbf75839345e28c90c49456": "9a115156e21f063c0831468214fb8eb6",
".git/objects/4d/8d8b62c2b1271d896c9f23961203333ebe2c6a": "f6abc97128410a5ee11f1f8372718eeb",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/1ecd2b5056749b579e0ab6fbc60fa907c4cfe0": "7cc2f8308dcbc84424ad17eebb31f5d9",
".git/objects/52/1a83dd0dce2593008983abe9521549e8839360": "15f1a30e66048b19a1e40b95c6bad1ea",
".git/objects/52/b5f2a9bd666e6b55642235d887829b9a960778": "ac0ec1d5b904f7390b2dbd7d0ebe366a",
".git/objects/53/7b94e6e0e5c75104dbd4dbf9b00f72016c434f": "94c45a2ee701f99951cdb38def781be5",
".git/objects/53/bb9e35fb56ec135e01c7a2ca9aa4d57ae78a78": "066798f6b8e34d3ac6ecd6e562481899",
".git/objects/53/d7283c02ac9b4af91ebb5cf493d3d94bde2921": "e86fb6a47badc124661d5ef898158495",
".git/objects/57/460a61dbeed913dc33a2a72871114f45125a32": "857e129d27cc8ed12a99481fb9364d89",
".git/objects/57/4c6c8b6777a06f2ff2026d0cb0b7eef408a050": "df9979dfd30af3a92c07a973ed45ac3b",
".git/objects/57/eadf6da1264b95b12fafc5115c07118f7025ef": "5e9c642ec76e97a52d631a9050b167f1",
".git/objects/57/f69a0133aef43d84ef0d96ad9a290c3dedfea5": "36726f3c9173605bc86ce0e60ead8400",
".git/objects/58/1f1bdc1ecc3f0a8462e86a06b1be212ea254ad": "fde32a388ea48ad1c43e74396648df43",
".git/objects/5a/1336006278a5ae32d09b0526f6259131a6e86f": "202231ff322c0f3b362c9ae23ea0c882",
".git/objects/60/74dd0d3fe002e908ea0ed6592d078bce81ddc9": "ebd5f01932913c9fdeff65fe694408bb",
".git/objects/61/40c5c74e2066fbeb2c77c96e40e302da01a3eb": "b5c22947189439f62f739cb97fc2f686",
".git/objects/61/b4a7ba8ca4e5106082fea5041ce96582aec692": "5ed34ae4b073d293e3eb0a75cac6047c",
".git/objects/62/36813f2564f4033d6abbe4a69ff29450b18d7e": "d4c935dd953196bdbf56ae4c47955049",
".git/objects/62/5962f11e7a1c5cacb895458d6c93404f7a75ef": "1eef3b3d57b7545c2b936067a9acb456",
".git/objects/63/64292220d37f8df385e16e3ba3270eef1c6915": "a5e62cbe2d8875f32dca0f3da0f97bd6",
".git/objects/64/681cc26f33aa254f9c80bc37ca60f3a04a1b67": "a0c9432bf37b5f12f879c35abc0b8f8e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/55784af412e0ff7ab26783931d6b63b9cd47af": "2fce1ea85e9507cb3966adc2bc8cd135",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/b38e26f5c49b43a7e15ddc5d920f174daf255f": "5c1f3fc4f8524134458b09431e75d5e9",
".git/objects/6b/c75f43248c96251f6a86d805960ca4c6d2cca3": "0ae8a6411a2d1837a983d42df4018fca",
".git/objects/6c/c0636a28036663bb6fc08fc0a260143d25dac1": "a4724a9b6bf276b8dd32cf375193cfd1",
".git/objects/6d/2b879d6383ae31ecc2ca29b6d962895d6087b3": "b949f52afc069d26880cfba6393e9a24",
".git/objects/6d/69224ec6a16ab59a69baaa17036cd45d113289": "84113eedb71610fd27b463894a68eb8e",
".git/objects/6d/acbd737ac2cd1ce5b8ceddc3c435905ff11a56": "d8cdd96cbcb0e8e2ca89986b2ed4512d",
".git/objects/6e/b7579d15fcd6fbccaadf900b61b62483a11c42": "f572c3a44c945e7cf812724b8d985382",
".git/objects/6f/f0f17fe1dd9b42ecf8f738482a5b1b7c07484a": "542f20107ede1b0fc219d82f48253e7d",
".git/objects/70/0c9f5d7bd793619cd6ef456708880aa30bc6c2": "c7819a6d595080ddd36908eccec60644",
".git/objects/71/ef5a98b8012c253d4468dc1fd2fd4696122e87": "e5bdf154e2748c4d8785957606873eb9",
".git/objects/72/6a46aafa038305ab9e1b5c63e4cd0038a3d1d6": "ce0ea89b031c55ff712ae81f9bd8c8bf",
".git/objects/76/3f74d2a2df77edc63c8743c076e6d493c385ba": "9070aac03cadc2a251c982eb49c90375",
".git/objects/78/1a491253a95ea0e415d006f31b537a54ff6b81": "b75b66ce400293d829f6b31965989e83",
".git/objects/78/917fb6f20d7a84290297b9ef402cf08afa318a": "7979db8a92b6cbaec6ae39fa9767015b",
".git/objects/79/717eb724395396b43e1f53f1d83160dbd24acc": "32acb8fa96fbbb26cf2629f99ddd9866",
".git/objects/79/ef484f6e258ad7b3dc01bba92b3e491f3ea321": "f13cdce94008da1eb1e24de00bacc7b1",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/eda482ade9cc6d45c43d85ccdf3f4b1d181f8f": "ee2efde0a1d519273e05eeea5cdb940a",
".git/objects/81/6532b5f6ad4d1d8436d8257366cbce87fe86da": "c2c0047b43c659f02c4f4c2425abf666",
".git/objects/82/89511fc75c44fae886b3951645606529cb5522": "157127c8e7a4f1c749757ba9380eda4f",
".git/objects/82/ae27b8a48e94500c0a602f5b251ec5efb2f5ac": "666303dfafd7c1c086cd14cf57d2a33b",
".git/objects/83/1f2cfc5ca13d39b04355effd38a21749781a66": "8c0bdd361e37d6e0856449ea422a703f",
".git/objects/83/e2d2f7c77bfb6ac7e1785d039b319b36458fb1": "27d3a864e5f69463b0bd6a456be7cdb6",
".git/objects/83/f21ba90a60c0f21e9f80ce5da99bd330fb9ac3": "3f1ac35d547a4e8756c10a3a98bc0e73",
".git/objects/85/88c914a1748ebdbd04e5e5d3911092e2611671": "8fcce2956ee204d8b4b086381dca2fbe",
".git/objects/86/43826b9ec62640bf37f8b36c4fa4a46792281e": "cc5ef78a6c0abc79f34c669ce55b7026",
".git/objects/87/7b0299204f7edc62f6a1ca2b6a936db2bbcbff": "5ca3dd9f87384763a77bb573698e85be",
".git/objects/88/424668d21ced2162fe9ac24a49f18dec32501d": "f9c2ad392ad72e1ab3b980e797466cc4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f8a398cf9fe9699d66d69dc6fb9e988b545a6b": "a27b972a56da10da3a8e39a4e4c5b1a4",
".git/objects/8a/20d72f4ce1c642e2b82b1af135ea4eccc8a915": "3cda059336d537ceaa84f809d4a32c5a",
".git/objects/8a/55784006bd4afc40b773b6eb438203fdcbc045": "d557e4581486e720f41406d5ab7333bb",
".git/objects/8a/a0e3624d1f441c943a67cd51eca19fd4b6a732": "a2da9601b2cefdf4eccfa8549758c27d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b019e007b95d2a300d3dd3c3d1e5e6f3f4d932": "c5b89acb290aab3b7f4fa41a8412e610",
".git/objects/8a/bb1132fcb7216e090dfa6528b15de307ea8fca": "09de3056320584c0e08a59213c17f90a",
".git/objects/8c/b72b26d5af25c4a9c912a403ed8c863f7879ee": "4bc84c0ecb07aa7c46346a63dd581383",
".git/objects/8d/76f5d57b6c03e017bee33d3f6d834d1db2178b": "005d5a565228f3d10a0d54a35c37176a",
".git/objects/8e/2cb250c0942504940a4256309fc1d2c36f63ce": "58af09075ef1ad806e2cc6aaf4f923ec",
".git/objects/8e/334a3c75b3d41fc1f80f98c27f5ddfecefb6f1": "832436f0d19b6e7fd6d49328b4e28309",
".git/objects/8f/47154db58d17a2eaff9867790e970d94f65177": "082adefdf01e1b29520042fcc38dcdb0",
".git/objects/8f/805c4403a44a907ff10a31e314b7dfe975a880": "0207570aeb7fd15447e65b66427a32e2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/5ae37893d454c7120f105ec2a199c3ad14499c": "02522cbf97e0bf8a3c1ccf66e2d99e6c",
".git/objects/93/3315bc6c02594ebaa9efb089afe00e78de28a0": "1cce8fe5dfc6cc1018ec9a1670f06646",
".git/objects/97/56561b5c7c2051eba2b13a6084c0b605e3ccc1": "3411c404fad557b63c31dc278b6be2f4",
".git/objects/97/a13043148cc68636526811d40723da3a6746f6": "e3e66f9d6c1dde1ba426659d23626534",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/0002c4d456f934240fd46e8715105791c217de": "028487d03688a4dc0ce1bcdc2807c9cf",
".git/objects/99/00f4921f1fb1594f6e39594739523c38a37a06": "de1338ffe6ac268caaf024641f180f41",
".git/objects/9a/f454ea760c4bac6e8f83dfb97eb45bd8106465": "a0caaf2665d2a8d68f340429e820f474",
".git/objects/9b/3d5f56a48382bf9901bbe3a9b103dacae3974b": "4fce916d4f6c835e41976427bc99f222",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/21af1da97a3fae0225f594aff52ae6ddf8256e": "d5abba44ea9529064eee0a0f71c27cde",
".git/objects/9d/cfdc25e284f1bc4ec2e6154dcff73ec4c34188": "7676d952fb5114ca6ebb05df1d95ef53",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/aaba33d4b27fa264c2fc9dc4a1f33eee626dfd": "3002f801b59e71689ff3318ba0ccc4dc",
".git/objects/a1/699798c160f28f31f0ce171764758e714e49a6": "7cc2b8cfdab16b2122b24089d0866f38",
".git/objects/a1/f5d6babc00766095b3c275e9d1b29f1114e562": "ca0df0d062fac305ae050bfeb0735442",
".git/objects/a2/9a09e2bc9b036bcd1cc7e037afeea8feff50fc": "9c56c46ccd16d958c6462074ad72bd3c",
".git/objects/a5/db57307b888eab071e5f6c885d6fb0e6c7dfa6": "9d91735a969ac29d060f6ece79f5dfff",
".git/objects/a6/06c380e7ce8d6e14e98f9134bd791ce2da8028": "eb163624ee70ff450d1ba64b38e74aa0",
".git/objects/a6/dba84d6a4b94cfc73d02488176b2d4bd55bd37": "af0852a391ae41c431c28fbaf5c99942",
".git/objects/a8/bb671f27f0b3172ec23db84559c20cce452961": "bfb566753dab491d400623cfcfb17a17",
".git/objects/a9/7ca8df59a11a3aaa9bc9bc53affe23629b54ca": "a11aa549abcdb580d828467f8b56e0e3",
".git/objects/aa/7d25fcfca2d708052baf9ebe528356b1c2655f": "f088bd76a004c257a787c8187188bf3a",
".git/objects/aa/f56cff2388cdaef3efb47a5a0176ffd287f3d6": "498395eb09b8b89c2b50f493f45035d4",
".git/objects/ab/482abb7edc8912782658421b5c8fd3c6594ec9": "0e5402e54b648b3c3e0406b16e46d4e5",
".git/objects/ab/86cec09c33080be108dabee218849d3888db09": "556f49a89a6132c1425922b6966abd8c",
".git/objects/ab/fea97aea400b8d8f5e704975c47bdf07e92288": "1359ebd9703f79f549d1db26a34522fd",
".git/objects/b1/34488d6583d731d3c4749bad64a388f7ea25b4": "1eab2152100fec95aaacd6afd77ebb2a",
".git/objects/b4/71227c8b1a6735306d1f52f3ed0e8f3aeb8d27": "a6653f73ffefba69c5ce4fa5007c473b",
".git/objects/b4/d38038b1d4b8194ea13d299859e6a1e4b78756": "32ab87f92636180ca31dbaf9865eb35c",
".git/objects/b4/df2de97e0d1d529d285ec1af0fa6e262602403": "01b83980e5d5a72e49510cb4149cc100",
".git/objects/b5/b3b38a9979b92dd97cfde90fa42d085590e5c7": "4f21d2a62707838f1f8da4ea7d5d4ddf",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/90f5efa86dfa59f1f37e81f8a5a9b91a0496fc": "baf4f6b5fbe045333b4417ea77e50951",
".git/objects/b7/c7a70a929d552e010962e56b3aa9f6f42ee7ff": "3d63b3c5b70e4c17cca4c9b2736e6906",
".git/objects/b8/38c142001eacc4889779db8bb32f85b9dcfc63": "bedfb59f22960c8450fc7256a48eeaed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/1fea2805d39a1e3f2faa43ec3589733efe5bc1": "1ada23bae83b9a47927c4d76eaa40402",
".git/objects/bb/14436e32aff432e9bf1e99281f355afdd6ee79": "352d50db9ab5e26e469bb737ea7776ad",
".git/objects/bb/71529175fe7d3a72a663a6c1da3777a732df8d": "637406086710819c0e70ce4bfb5fab27",
".git/objects/bd/b223253ec556e1dcaaf74aaba4570cb0321449": "aaa22c054e6a624e96e4a8b42468c77e",
".git/objects/be/32faa33b18b88a9291bc234e1428ad33f29c8a": "86593d0a100fa757442980201abee7a9",
".git/objects/be/c1f41217287c01c60534bbf763774901b7a705": "74c4c9c0843c4fa774aea6e84b735090",
".git/objects/c2/0a5880b66316762b9614b348ff8e4c7a69ce13": "1e934bae8f1bef9d036a61c86dcf7526",
".git/objects/c2/ac746d1631e909c6c2cc8390fbb1c71873d86e": "3c367d14b757947d1843f6607ecbaed3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/0896cc1a5a86f83ad63d360a3c7da63c9d507e": "f4d301a304c4d64ca977706ca939cc47",
".git/objects/c8/0ca78094b2e4a6dd062f9fce2ebce91d1d1cf6": "26901fb5f749c1336ec19006338961e3",
".git/objects/c9/5d8535c2382363f86cd4eaa642458a1ac2276a": "24729224f7cf71506f8e48850b47de47",
".git/objects/c9/dcb757a6d07573f09c00dcda52493fd88db045": "aac34f958f42033b338721fef0d48465",
".git/objects/c9/e6d41cbe04fcef40779be625fe2e6f77b98ae2": "d09f4ea0a2548d37c0566d6317f08e06",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/ca/f1e136dbadee64dd17939adb038de9b51a82b1": "912f3baa2a9021fc268ae9b479ac73f7",
".git/objects/cc/cd7fda415c1e6c3963ad239727d03aea985dea": "a50e7082651720aba2c5f4061cb63a8c",
".git/objects/cf/3a2b1805d7c679bfc1045ed9892fbf92902ca0": "d9d3e1d148f66445e79af46cc431ddd3",
".git/objects/cf/cc8bd890fa19a9acfb356f518e87b2f8b48c59": "03a4c16077dd2f483a3795fa615949b0",
".git/objects/d0/b585ce272a5002ec97bf0781886e668967b9fd": "15907cd0f0508a9d4aa78e3389e4d37b",
".git/objects/d2/7990bec7623529803ed93e60da8363268b3e23": "02a0eeacba308dd1a8cabe6fc7e73ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/d80facb7f0cbf3c1b94b24d4274f21f4e67d4e": "aebebfe7f3cb8fb2098972abc98c05ff",
".git/objects/d5/f638b31c5bbfde3726e78b2d8fd394c59cf1c3": "1b385d65ff3975d8f913d074dddd8f1f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ce83fedad99499d78d93dee5248ecdc7fccb4f": "021acfbd8093f6cdd209b480120605cc",
".git/objects/d6/d458420ad01423392160a2efde96b1ce2dbf64": "1e25c67371c0a830295513ab663d5bba",
".git/objects/d7/6243f3b86b25e9b98f4282aa82de9051638dee": "43ac834f29b96748e563e161167dadc2",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/c249c8c5683a789918f5ff4eedb34800757adc": "3ecfb8d1360a23f07b7314c82408f181",
".git/objects/d9/530249e56945569a326dbe6783a42015eebac9": "26cd988732b94036850bbe74231378cc",
".git/objects/df/8e4e6ff4a64f3c7dee5541e8fd58a3af4c5ef2": "daea3e2836e8ea000636d2633cbd0c8a",
".git/objects/df/a98af70f53311f585e8a2f3e289d2eda0a8698": "38534f4369fa70081d238f5874d00a30",
".git/objects/e0/9c3356e4c0421af85032d794774ae9f5d8ad4a": "c54e42e99bf8d4b617656f2683fb92fd",
".git/objects/e1/2ca3bf37ad431b14d9d5d418b9c730b37622b4": "4090d7faecbd0c36abf1681ca1681d0d",
".git/objects/e3/6a3b657174d4d26a17d9bc96aa2fd38f4ecfbc": "6c04d9f7d954cd5cde64d2cd717a56f8",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/3416b8cbbc0b128b8a520d16b488c60635edf2": "3acc699491929df7f1d87a83853218c6",
".git/objects/e6/0e008d0056869e8582665ffc4b593575a86129": "2f2e1d9be9de513cbdd0bf6bc3910369",
".git/objects/e8/7021a3c41c3ba49da43dfc8a82648284f5392b": "9707a0b164579c5cb52faff63fd344d8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/a7e25a9cdf8f059f870c8559af0ce79da3fc4d": "3ce7b2f491ff4ebe06641af17927b153",
".git/objects/e9/d3aa240ad8cd3db34809445cc16e745be04978": "fab49a32d06f8255e46d3578b63f2cb5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3e87b2129e0f6452cd0fb111d175b6eef3501d": "76c74ed6ed583c4425feccfee572fdf7",
".git/objects/ed/659ade21912a752831c8f233cf6be8d77ae51d": "c758027fc6648c9d58eded9e0370ff37",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/6c01b21d7cad2dded3244071c585c435bf3ffb": "c477735c4e9c0350879d903cff62f6bd",
".git/objects/ee/77bda730212c41ebfa4cfe869ce61ad6d0aaa0": "2c19c4485fdcc673883273cceef87754",
".git/objects/ee/8dd7f1a832cdf3b815a06c57f6b95faf96d972": "6526c30f7960d067d830f3a3221ab2c0",
".git/objects/ef/0c607ffd306c4d0f169e7aee5118b99f522524": "0b6e5a23a3443040e57bba0625ce2cd2",
".git/objects/ef/5f7025b3095416d6ddaece3db9da1b12796128": "ffa6e638f9a537610fa21ca074f1aee3",
".git/objects/ef/cf72957164bdb03c910d5725ff9f5b6245fa97": "3f6daa3c94c2aa38f6d9e5e420c1654f",
".git/objects/f0/e457762c30a43894127eb90997af55cc94d32e": "b7487c82366ef5dfc0a348adb4e7dd32",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/554b0bc71ead857f8bda7064069b3837d965c9": "53c35a8eecc959bd6e7ad708e22c3d25",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/94910ee9789ff0c9ad2b79c12e0ae7d1c8d146": "5028276bfc0d413bf07f5490fad8ffe2",
".git/objects/f7/5697980e6d9731f618bb83f708fd9bcc6860bc": "bf338e72a9b64417aeda7cf7a5cffe1f",
".git/objects/f9/39ffd211cbe8bff0143d10b905aaa077c4c32e": "f19999274ffb94877c7230f0d0536bb2",
".git/objects/fc/07f371fa2db3aa6f262cdd8a5aca5ec73fb5c0": "243e0aca3620f5e63ca0be84e769f445",
".git/objects/fc/6cc9530a33e5a0e13b90b4c694a4651dcfff15": "e82a7059794570d903ae3bc2c7501538",
".git/objects/fc/817c443e6a2573551f3627524ffdc6771be3b7": "284c73d32282ffb2d864a54a7df616a2",
".git/objects/fd/4cf872494b2906bd96c0e0a0b530cbc727c18f": "87278e03baca5b5b60f6b151c15cddec",
".git/objects/fd/f4cc0bc0d6e872c912a76537f0673ddf129873": "c6254bf1cbd600abbedcd01dc7bcb834",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/833672402f6fae26e74d958cadd2b3e9eb1e19": "8ba1a76945db1cfd54142d9c51c03308",
".git/objects/ff/5f2d268b3750fe2f07dca6dac84c927d013c39": "6f8a9dcf27a27430ea57eacf0c698d97",
".git/objects/pack/pack-03ef0dbd4a76aea1f151f89b02785f1093d49577.idx": "0a9e12f2d20e5cc9a939a9e060e95bfd",
".git/objects/pack/pack-03ef0dbd4a76aea1f151f89b02785f1093d49577.pack": "af38b4fa2a5f473b45c59e9b3a89302f",
".git/objects/pack/pack-03ef0dbd4a76aea1f151f89b02785f1093d49577.rev": "20e5d3991265a22801ccf1484038ca4f",
".git/packed-refs": "912642cda3294cdcbb5dc90d431754b6",
".git/refs/heads/main": "e13fd10f4914209d764ba116f5ad0a74",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e13fd10f4914209d764ba116f5ad0a74",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ae57722e2b97d701bbf0b321a7fef73",
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
"flutter_bootstrap.js": "a1c355986a46037ee2000153e4b974dd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "afdd5f2efc50f4258390901e41fe2e03",
"/": "afdd5f2efc50f4258390901e41fe2e03",
"main.dart.js": "cb3620900fd176cbf2f5cb5e54a7eac0",
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
