const cloudinary = require("cloudinary").v2
const json = require("../utils/jsonresponse")
const User = require("../models").users
const Card = require("../models").cards
const CardView = require("../models").card_views
const Hours = require("../models").hours
const Settings = require("../models").settings
const Gallery = require("../models").galleries
const Icons = require("../models").icons
const Reviews = require("../models").reviews
const Languages = require("../models").languages
const Helpers = require("../helper/functions")
const { Op, Sequelize } = require("sequelize")
const logoBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAMgCAMAAAAEPmswAAAANlBMVEXx8/XCy9LFztXu8PPs7/Lp7e/W3OHL0tnZ3+PN1NrS2d7i5urn6u7f5OjI0Nfc4ebP1tzk6excnoRZAAAXh0lEQVR42uzUAQ0AAAzDoN+/6eloAiK4B4gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLCBDWECGsIAMYQEZwgIyhAVkCAvIEBaQISwgQ1hAhrCADGEBGcICMoQFZAgLyBAWkCEsIENYQIawgAxhARnCAjKEBWQIC8gQFpAhLGDs1AEJAAAAgKD/r9sR6Ag3hAVsCAvYEBawISxgQ1jAhrCADWEBG8ICNoQFbAgL2BAWsCEsYENYwIawgA1hARvCAjaEBWwIC9gQFrAhLGBDWMCGsIANYQEbwgI2hAVsCAvYEBawISxgQ1jAhrCADWEBG8ICNoQFbAgL2BAWsCEsYENYwIawgA1hARvCAjaEBWwIC9gQFrAhLGBDWMCGsIANYQEbwgI2hAVsCAvYEBbETh2QAAAAAAj6/7odgY6QDWEBG8ICNoQFbAgL2BAWsCEsYENYwIawgA1hARvCAjaEBWwIC9gQFrAhLGBDWMCGsIANYQEbwgI2hAVsCAvYEBawISxgQ1jAhrCADWEBG8ICNoQFbAgL2BAWsCEsYENYwIawgA1hARvCAjaEBWwIC9gQFrAhLGBDWMCGsIANYQEbwgI2hAVsCAvYEBawISxgQ1jAhrCADWEBG8ICNoRF7NQBCQAAAICg/6/bEegIYUNYwIawgA1hARvCAjaEBWwIC9gQFrAhLGBDWMCGsIANYQEbwgI2hAVsCAvYEBawISxgQ1jAhrCADWEBG8ICNoQFbAgL2BAWsCEsYENYwIawgA1hARvCAjaEBWwIC9gQFrAhLGBDWMCGsIANYQEbwgI2hAVsCAvYEBawISxgQ1jAhrCADWEBG8ICNoQFbAgL2BAWsCEsYENYwIawgA1hxc6dJtcKAgEURgREwGn/m32Vd1Op/Ih3cO72fIs4BU0rADEIFgAxCBYAMQgWADEIFgAxCBbwm+3bFOKQ8zSV4r13zvky5a4bYgxjYyuch2ABD7ZJMRdnXnIlDyE1FY5HsADbhmFy5lM+x7GvcCSChXtrQufNCnXpQlvhIAQLt2XHONVmE2VIzLaOQLBwT230ZlsuBy6IeyNYuB+bOmd24TpOWrsiWLiZJhazKz8w09oNwcKd9NGbA9SZg9Y+CBZuw4ZijlMiE63tESzcg02TOZqnWVsjWLiDpqvNKXxkI35LBAv6pWJO5APzrM0QLChnozNnm5jBb4RgQbU2m0uoO3YdtkCwoFjy5jp85Ji1GsGCWpfK1X95rLAKwYJS4XK54pi1HsGCSuH8SfucjkWH5QgWFLpwrr6UVGEZggV10rVz9cVxM1yGYEGZthgJ6oHPdhYgWFClv8jeFcOsfRAsKGIHI8rENumHCBb0iLWRhvn7ZwgWtGgvuXj1kidZHyBY0MF2RiqS9T6CBRWCvNsgyVqAYEGBRsYqA8lajWBBPGlvg38rvBi+gWBBuvb6i+3vmdjLeolgQTYdx6tvme33FwgWRBO6yzBr4BvDpwgWJNN0vHqo+Sz6GYIFuRplx6sHx4PhPIIFsaJRigfDWQQLQvXid6+Yvn+OYEGmUfRq+2uMsv5EsCCSvmk7o6x3ECwIpPo6yCLpEwQL8iTl10G2smYRLIij/zrIvXAOwYIwvcrlq1kT74W/ESzIMmr51Plddazwg2BBlGDux7NH+oNgQRK5/0Fm+L4JgvWPvbvRSRiGAjBaBoqK+PP+L2s0xGSj3QiQ9I57zkN86brblvVItn1l8/2cYLEar1mmGWoOFlm/BIu1yLh9ZZE1IVisRNLtK4usEcFiFYbvwtYiS7BYg7zb7WPfFlmCRXj7bNOiFlkNgkV8j373lZ2siwkW4SX/PTi1+9pkJljEluhyhgsdMy+yBIvQDoWpXeLThYJFYMYZ6vJe4SBYxDWkuAv5Gu9Z78kSLMIajF8ZcBgRLOL6MH5l731MsAhrb/zK3vuEYBFV6ttk7L3XCRZBvRUcLpwSLGLSK3PvFYJFSHrls7BGsIhIr3wWVgkWATnu7G9hnWARj175LGwQLMLRK5+FLYJFNHp1jd1+k4NgEYpeXel5k4JgEYleXe24yUCwCESvXDkzR7CIxPzVTbYJxt4FizD0ynzDPMEiDr3yCtgCwSKMr8Ltnh58I0uwiOG1cA/bxz6oI1iE4L4+E1nLBIsY3IdsIusCgkUI3pu4q/fH3XoXLPob9OqXo4VLBIsAvD944tnCBYJFAN53PjFDukCw6O9Q+GPrfYlg0d2x8M+tfrMEi94+CyOm3tsEi65cKDNl6n2OYNGTA89Vpt5bBIuOHCCs8rOwSbDoaW9gtMbPwhbBohsD7k1+FjYIFv0MBkbb/CysESx6MTA6z8nCCsGiEwNYS7xOcU6w6OWlsMB4ww9794LdJgyEUXgwAsfFL/a/2Z4+T2zjWCMgnl/cbwttbxppNNwjWHgLBrByMN5wj2Ct4HztL+OxS621qTuOp/5a06HnItgw+v0uTRUI1qL2/dDao3b8qO+RRDkGGt5haGpAsJZzPbX2XDvUc/I5ExuwsrE4+QbBWsz+I9kr6VLR/XI5Nsq8SVdBsQjWIg6D5Rn5bxYbGpwYyPqPYC3iMFq+4+aTxSeevdg38xfBWsB5MJ+j/s+5Oc5cEDoxQvoPwZrvozW3SwWHCWX4RM67iX9Oh2DNc+isRFL/QVduNBRg6P0XgjVTv/nJYx9eEAYgXSyCNcNu2PpUjBMXhCEo/7AkWKVm78tM8jc2XqxEDkL4mQ7BKnZot35j48QFYRi6z3QIVqlru/kbGx8uCAORLRbBKvSD808nVoxGorrpnWCVuTIV48TKvlhEL30IVoEl1zlt5xyLlX2xaBaLYJU4J153+bCyLx7J5Q0Ey23hw+Ok+NfGiwP3iBSLRbAKDLaksdkCDtwDSnrLuwmWX29mDB57MOEelF6xCJbTGocx9R9jMeEelNxKP4Ll1tlvHGPl4psTgbVixSJYXr39wS+FuVgpE5lYsQiW0661FcgdJTiwUiY2rd8KCZbTyf7ipjAPO9yjk/o/FsHy2dstBt5fYEVDfErFIlg+g63j2FSLidHwhJ5bECyXs33GaMNLfDRVgk6xCJbLyT7jFOsVJkZFyBSLYHnsbD1C5wgOe4MElWIRLI/e7rFn+ws8eRYiUiyC5dHZelJTIZ4869C4KyRYDnu7x2TDF9gxqkWiWATL4WJrOjW14cmzFoViESyHZGtqm8rw5FmNwCsdgpXvbI8YxXqGJ8+C4heLYOXr7RE7G57gAEtS+I1+BCvfyaYwOzqFAyxR0YtFsPIle8Qh1iQOsGQFLxbByrazCQy7T2ICS1fsb+kQrGwHe4rPQN/iCaGy0MUiWNl6m8Kp+yN2YGmL/E1ogpXtYtMYHb3HDixxgYtFsLIN9gRb/G6xxF1e3AtrgpXtaM/w/vkzlrhXYGiCIljZOntAsKbsOMDSF7VYBCtbsrVV8ofBk5waBD1QreTfyPoIVh6e5NQi5kbJOv6NfAtbX9zLmVw8yanHT/buBDt1GIbCsJwRCOP+N/t62vNaphLbSZEs/98O2gOXyJFkk102BFYkAisGIzmeDMEeAitaK09REl5hJMcVg6MXHr4jb8EZVgRGcpyxl1gOviPv0stzrGv4MdLR4Iu5pZIEViQaR+cxkuOOucu/CKxIjObMYiTHIWsXUxBY0TbynPtevUiM5LhkbKEfgRWJ9TIz6GhwytZ6LAIrEgv8ZtDR4JWpZTMEViRWJM/ZCXyytGyGwIrFJRSvsGTUM0OHqwRWLK75eoUdDa7ZGYQmsOLt5CnO3EOgxd05M59NAisWV9W/MgpcszIITWAl6OUeR1ifaHH37xxMILASnOSBz5NNY/8ZGGBkSIfASjDKDZ8/YelY2lcFG0M6BFaKXh4w+UyLeyU6Cw2kBFaKQW75fHOc7CCogYUhHQIrRSN3aHMPtLjXw0CnIIGV5CT3vN8DN4eCsCb6L4YIrCRHuUYTVgi0uFdFvYGUwEpzkP/cPWxnocW9MkPQRGClGuUKPQ1sca/OOSgisJId5BsnWB/2gqqoNpASWMmaVv6ArTW00biXvkLtMaghsNIN8snXUWYeZp6rpNiORWBl2Mva+lAqZp5rtA9aCKxk36s1aWlg5rlWU1BCYOXYyQcKQmae63UKOgisLAcRoQWLgrBiQ1BBYGVpem8z8BkoCKt2DhoIrDzHztmWoXQUhHXT+dwSWJnGtvoDd2ae66ZSGRBYubbVX/ZMQVg5jXYsAivbueyzSyN/Pwo2hbcjsPJt25qfrygIodDcQGAtMHZlj5EuwFZkqBQIBNYSx16W6Ip9P0hBCJ3mBgJrkeYg+S7F9l9REEKpuYHAWmiobx4nBApCKDU3EFhLjb3k6As+vuKaHGhtbiCwlhvayh6vKAihdZEOgbWCZpI0l2L3i36ZBFD59SWwVjFOKXFVdDUYKAih101IYK0iIbKm0uMqNFyTA615WAJrNcdNL3O6TcGtV18oCKH4qpDAWtP21MnvukOxdw/+oCCE5qtCAmtlx2Hq5FE7DQ6erUKgIITqHDSB9Qea7XCaLvu+a7u+30+nYVtwT/stCkKovioksJCAgvAfe3eU6ygMBFG0GhtCSAxh/5udUWby8Z4COGCgI92ziJLLuBuc+6mQwEI+nozi9KlCAgu5KIQ4/VMhgYVMFEKc/6mQwEIeCiEcTBUSWMhDIYSDBaQEFrJQCOFhASmBhRwUQiwLve2LwEIetozCxb8KCSxk4LcT8DGjQ2BhGYUQTmZ0CCwsoxDCyYwOgYVFFEJ4mdEhsLCEQgg3MzoEFpZQCPGJ0XZDYGERhRCfGWwvBBaWUAjh6OKdwMI8CiE+drF9EFhYQCGEp4t3AgtzKIRwdfFOYGEOhRCuLt4JLMy6CvBz8U5gYU5VC/Dz4p3AwpxBgKNVMwQWJlEI4W3VDIGFGRRC+Fo1Q2BhCoUQ7na8E1iYdBHga8c7gYUJFEL4u3gnsDClFeDs4p3AwjsUQrj8uarsCP21a4Z0G+sYQwiSQoixvo9paJvHpTI4RCFEAVcrSrar/tEMY9SCeL+1zaM3OEIhhMPFDbK9VF07Bn2kTs2V45YPFEJ4XNwg20PfpKgJOallONtdgL/FDbLSqi7V2qpOHUetU1AI8eR0cYOsqKq7BRVybzlpHY5CiH+cvh+VlVN1o8oKt4ar+CNRCPHi8/2orJRrCtpDTA/DISiE2EeyUmRFVG3UfgKZdQAKIX7y+H5UVkA/BP1GZn0vCiGeHP74S7bZJek9Mus7NQL+8vh+VLZRlXSckC6GnfUCnhyOQcu2aYOOVTc80CqOQoj33O0flW3RRR0vJN5nlUUhxAR3Y9Cy9aqb8nHM+g59EPDi7hpLtloXdCKOWYVQCDHP1Ri0LJOf49VL3Rm2ohBiga9rLFkeX8er/yLNcBsKIXI4+o2ObAU//38KA7OGJY0CfvM0Bi1bofd00cHTrLUohDja3TaSfe4R5crIC/gVKIR/2Lvb5NRhGArD54RvCC3sf7N3Op07UyhJ7PQHsvU+W4BxIvlIQbkw2/zkMrFH+em/V6MgRKlIbSy50hDzX82RVYeCEMUitbHkOh9hP/60ozAsRkGIGoHaWHKVQ7D21YORI6sCkVGUC9PGkqcFTV9xZP0RBSGqRWljyb+1/J/myKrAllG8w2bwavKEwGnReXdyWXMoCPF2o1eTi719eLDUlYGdOa1kVdCvo9eSH/RwXkmbI0fWSxSEiOHmleRnTcWvpmz3RoWwYRX0afVuLLnI0FyLg1jWMwpCxHH3OnKJocUn8Ej3/QcKQoRy9Cryt/7OK7rvDygIEcvJa8hf+jyvaGX91HpcBZ1Z18aS7W7PK0kjq9+XnAS8wcUryO75vKIutE1BiJD2rifb7ut+8NmGupCCEBEdXE3dn1eSdtSFFISIZze4lvxf10soqQsnDJH3BaF3V9dSivNK2rKR9KWrgPc5u5LcyfzgogsfBPvtJuB96hcmK08/luY7BSGi2bmOMk2YMazT8Rs02vTpKvKks/pzNPr+hdGam2soWXuDhAOfyUEodSM68oRTr//mTxIOvV0Bo2l3V5BfO/R6XvGS1dAnRZDC3uWU8fro02AJFsI4uJhSfkNlx3UhM88Io2JER0nzz+mvC/vK2KFtV5dSigAWL1nMPCOyswspbzwn80tW3z1KNKd4REeJH75j3ulCIu6IZXQZ+dlHnofvJusKhyTv0GjI0UXU20bkOpeUKVIi7ojn5BJKXixsM6ZIOw+toEllIzpKeEGYPUWa7zdGC64uIJob2XrvaS5V0JizlynLBCGb/Ug0ILbN4EXK23BP2ntP1qREQ+5eJPaNfNmmyb2zowFx7b1ENGO/JSkLcxb9aMXBC5S74Z6uLMxa9KMNOy8Qz95MkSx2NCC2q+cpfcM90zh0n3v60ZObZ4nLox/ufZeFQ/aXaMS3EHgXl0d5ysK8t8Box8VzRPo5zW1h6ltgNGPvGSL9nOW2kAYWmjC7zE80sJIsT+ahhEaMniZqhSR7/f6xdy+4iQNBEEDdQYEA4Xf/y+5ukk2AYAkFKXKX3ztEWe6p6THAoouXGjUYYM1j5YyPEn2saszgX2EWK2cMsGhk/KHCwb/CTYtjJfFRopVDjRj8K8yh9m4pMr0c67bBAGsG/QZXCGlmrPA++FcY9ZwyyJr5Hg462tZNA/GDLK960dCmvhNYMxhk2cNBR7cK7wJrBoOs3QANneobgZU/yLKHg6aWdU1gxQ+ynALT1qquCKz0jTMao/T1WlcE1l121ZbGKI291CWBdZ/XrqN3A3daW9UFgZX90KqBO7091wWBFb0jy8Cd7g51TmAld0g13OlvXWcEVnCHVMOdABe3oAVW8Ojdon4S7OqLwModvdtzRoZjfRJYsaN3K2UIcfZTKLBSR+8OCImxrf8EVmjr3QEhQTb1QWBljt4dEJJk8VTvBFbm6N1DSETZ1juBFblwxpsThNnUG4GVuHBGoYE0Hz+FAivwsNCNZ/Js6x+B9VPbmiqP0pNoWX8JrLjDwpVCA4nefgoFVtph4d5KZDKdqkpgPWCxrslRwCLWskpgPWRyNwufrHAn1mJfAivqsFBekexUAivqZqGCO9GWAutRpwkdFtrYR7bFXmDlPGXvSS/SnQRWTL1BXpHPNY6Uu9AuPDMDatEhd6HlFdCl3iCvgC71BnkFdLkLbd4OdKk3yCugS71BXgFd6g367UCTeoP7zsAPHeoe9l8BU7CrX7WyXxRoUm9Yu6gA/GHvDnMThmEwgNZpF9LQUrj/ZfdvmmBMDEabSu8dIkrsz85O4g3VeQW8ZhjjPv+lAk3pa9whzgA0J8ePxBmABs3xZqP2ILCTVe/2LgI7aRYm04NA1+1iFvog3Q503S6ahZ6DwJe2FycnaQbgLY4p/lnVHQS+abj07noFXGl2TsfsIHCrydS76xVwq8lCViquV8D7fRwU24HdyPGa0aQzsJrpFM8bFa+ANfUlnnS+dADrGmo8oZobBLYwLKf4k1NRagc2M9UUD0rZWxDYVj8/cmalOotdAS2Yyhi/OBcpBqAh/WXJY4or6ZwXhxXQpGE6znMpOZdlmY+TVyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDJHhwIAAAAAAD5vzaCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwBwcCAAAAAED+r42gqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqirswYEAAAAAAJD/ayOoqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkp7cCAAAAAAIMjfepArAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKcAnTNeiLeG1rEAAAAASUVORK5CYII=`
const coverBase64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAP1BMVEXm5+jp6uuTlZjAwMHX2NnKysuMjpKQkpXr7O3j5OWtr7Hg4eK0tbfBw8Wlp6mfoaSXmZzR0tS5u72vsbOoqan5fWL2AAAClElEQVR4nO3Wy27iQBBAUXfHdDdvk8z/f+vYvKMJEHEXrpHuXcECqXRU2NUtUmfv1nfygeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8XlS4d1u32ZcZBnheVb51I2F79+G3PIsHzpq+Zc+tOXtqvzTvOwqHyj2Mh3OM6WDqV+tle/mKWofGlbcj3vXNrnXNfzzvOgqHxd2+5X/Wn5FuMi1lXI9QvL16V2ActTl+dgrMLyXadqn3Xiq7uI6xeVb3nVWpd8Wr9DwEGD8rVVOb9r21c98eUh4PrF5EuLMj7sjoP15+Ub/74Bb+eYfOtp44bp0/H+u/jNPda/heRr+8lsulXGiznf+Dbh/r4R+c7v2lwWKQ35rni3c0C+dH3c1eW2fuMLdzsH5OuuG1d335YvX14ncYrHd7tUfmgfbP3C8U03y+NKsGnD8S2f7N7YEGvaaHz3d95PBbudg/G1j+d609t47hnvi8WX+ld6wW7nWHzd8Eov2O0cii+tyi+KdLyE4ut+9VyL9PCLxfffJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDyUfSj6UfCj5UPKh5EPJh5IPJR9KPpR8KPlQ8qHkQ8mHkg8lH0o+lHwo+VDyoeRDyYeSDzXytWRv1vruz/bD3m3zF/b9FIMyRG2iAAAAAElFTkSuQmCC`
const iconBase64 = `data:image/png;base64,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`

exports.create = async (req, res) => {
  try {
    const check = await Helpers.findCardByName(req.body.URL_title)

    if (check) {
      return json(res, 409, "Card already exist")
    } else {
      const logo = await cloudinary.uploader.upload(logoBase64, {
        folder: "wazcard/logo",
        resource_type: "image",
      })
      const cover = await cloudinary.uploader.upload(coverBase64, {
        folder: "wazcard/cover",
        resource_type: "image",
      })
      const icon = await cloudinary.uploader.upload(iconBase64, {
        folder: "wazcard/icons",
        resource_type: "image",
      })

      let cardData = await Card.create({
        uid: req.user.id,
        title: req.body.title,
        lang_id: req.body.lang_id,
        URL_title: req.body.URL_title,
        number: req.body.number,
        deviceName: req.body.deviceName,
        country: req.body.country,
        logo: logo.secure_url,
        logo_public_id: logo.public_id,
        cover_photo: cover.secure_url,
        cover_public_id: cover.public_id,
        floating_icon: icon.secure_url,
        floating_public_id: icon.public_id,
        status: "active",
        views: 0,
      })
      // floating_icon: `${req.protocol}://${req.get(
      //   "host",
      // )}/upload/icon/default_fIcon.png`,

      let week = new Array(
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      )

      for (let i = 0; i < week.length; i++) {
        await Hours.create({ cid: cardData.id, label: week[i] })
      }

      await Settings.create({ cid: cardData.id })
      json(res, 201, "Card created successfully")
    }
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.all = async (req, res) => {
  try {
    let data = await Card.findAll({
      include: [
        { model: Settings, as: "settings" },
        { model: Gallery, as: "gallery" },
        { model: Languages },
        { model: Hours },
        { model: Icons },
        { model: Reviews },
      ],
    })
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.cardByTitle = async (req, res) => {
  try {
    let adminData = await Helpers.findAdminFromUsers()

    let data = null

    if (req.user.id == adminData.id) {
      data = await Card.findOne({
        where: { URL_title: req.params.title },
        order: [
          [Icons, "priority", "ASC"],
          [Gallery, "priority", "ASC"],
          [Hours, "id", "ASC"],
        ],
        include: [
          { model: Settings, as: "settings" },
          { model: Languages },
          { model: Gallery },
          { model: Hours },
          { model: Icons },
          { model: Reviews },
        ],
      })
    } else {
      data = await Card.findOne({
        where: { URL_title: req.params.title, uid: req.user.id },
        order: [
          [Icons, "priority", "ASC"],
          [Gallery, "priority", "ASC"],
          [Hours, "id", "ASC"],
        ],
        include: [
          { model: Settings, as: "settings" },
          { model: Languages },
          { model: Gallery },
          { model: Hours },
          { model: Icons },
          { model: Reviews },
        ],
      })
    }
    if (!data) return json(res, 404, "Card doesn't exist")
    if (data.status !== "active") return json(res, 404, "Card disabled")
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.cardByTitlePublic = async (req, res) => {
  try {
    let data = await Card.findOne({
      where: { URL_title: req.params.title },
      order: [
        [Icons, "priority", "ASC"],
        [Gallery, "priority", "ASC"],
        [Hours, "id", "ASC"],
      ],
      include: [
        { model: Settings, as: "settings" },
        { model: Languages },
        { model: Gallery },
        { model: Hours },
        { model: Icons },
        { model: Reviews },
      ],
    })
    if (!data) return json(res, 404, "Card doesn't exist")
    if (data.status !== "active") return json(res, 404, "Card disabled")
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.reviewsByUserId = async (req, res) => {
  try {
    let data = await Reviews.findAll({
      where: { uid: req.user.id },
      include: [{ model: Card }],
    })
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.reviewsAll = async (req, res) => {
  try {
    let data = await Reviews.findAll({
      include: [
        {
          model: Card,
          attributes: ["uid", "URL_title", "title"],
          include: [
            {
              model: User,
              attributes: ["type"],
            },
          ],
        },
      ],
    })

    data = data.sort((a, b) => {
      const typeA = a.card.user.type
      const typeB = b.card.user.type

      if (typeA < typeB) {
        return -1
      }
      if (typeA > typeB) {
        return 1
      }
      return 0
    })

    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

//user cards
exports.byUserId = async (req, res) => {
  try {
    let data = await Card.findAll({
      where: { uid: req.user.id },
      include: [{ model: Languages }],
    })
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

// get all admin cards
exports.allAdminCards = async (req, res) => {
  try {
    let data = await Card.findAll({
      include: [
        { model: Languages },
        {
          model: User,
          where: { type: "admin" },
          attributes: [],
        },
      ],
    })
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

// get all users cards
exports.allUserCards = async (req, res) => {
  try {
    let data = await Card.findAll({

      include: [
        { model: Languages },
        {
          model: User,
          where: { type: "user" },
          attributes: [],
        },
      ],
    })
    json(res, 200, null, data)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.deleteCard = async (req, res) => {
  try {
    const check = await Helpers.findCardById(req.params.id)

    if (check) {
      await cloudinary.uploader.destroy(check.logo_public_id)
      await cloudinary.uploader.destroy(check.cover_public_id)
      await cloudinary.uploader.destroy(check.floating_public_id)

      const icons = await Icons.findAll({ where: { cid: req.params.id } })
      icons.map(async (icon) => {
        await cloudinary.uploader.destroy(icon.public_id)
      })

      const gallery = await Gallery.findAll({ where: { cid: req.params.id } })
      gallery.map(async (img) => {
        await cloudinary.uploader.destroy(img.public_id)
      })

      await Card.destroy({ where: { id: req.params.id } })
      await Hours.destroy({ where: { cid: req.params.id } })
      await Settings.destroy({ where: { cid: req.params.id } })
      await Reviews.destroy({ where: { cid: req.params.id } })
      await Icons.destroy({ where: { cid: req.params.id } })
      await Gallery.destroy({ where: { cid: req.params.id } })
      json(res, 200, "Card deleted")
    } else {
      json(res, 404, "Invalid card id")
    }
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.updateSettings = async (req, res) => {
  try {
    const check = await Helpers.findSettingsByCid(req.body.cid)

    if (check) {
      await Settings.update(
        {
          logo: req.body.logo,
          cover_photo: req.body.cover_photo,
          bg_image: req.body.bg_image,
          like_button: req.body.like_button,
          title: req.body.title,
          slogan: req.body.slogan,
          icons: req.body.icons,
          hours: req.body.hours,
          reviews: req.body.reviews,
          gallery: req.body.gallery,
          floating: req.body.floating,
        },
        { where: { cid: req.body.cid } },
      )
      json(res, 200, "Setting Updated")
    } else {
      json(res, 404, "Invalid card id")
    }
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.updateHour = async (req, res) => {
  try {
    const check = await Hours.findOne({
      where: [{ id: req.body.id }, { cid: req.body.cid }],
    })

    if (check) {
      await Hours.update(
        {
          from: req.body.from,
          to: req.body.to,
          isOpen: req.body.isOpen,
        },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Hours Updated")
    } else {
      json(res, 404, "Invalid card id")
    }
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.addGallery = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image, {
      folder: "wazcard/gallery",
      resource_type: "image",
    })

    const galleryCount = await Gallery.count({ where: { cid: req.body.cid } })
    await Gallery.create({
      cid: req.body.cid,
      image: result.secure_url,
      public_id: result.public_id,
      priority: parseInt(galleryCount + 1),
    })

    json(res, 201, "Image Added", result)
  } catch (error) {
    json(res, 500, error.message)
  }
}

exports.updateGallery = async (req, res) => {
  let gallery = await Helpers.findGalleryById(req.body.id)

  if (gallery) {
    try {
      await cloudinary.uploader.destroy(gallery.public_id)
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/gallery",
        resource_type: "image",
      })
      await Gallery.update(
        { image: result.secure_url, public_id: result.public_id },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Gallery Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid gallery id")
  }
}

exports.deleteGallery = async (req, res) => {
  let gallery = await Helpers.findGalleryById(req.params.id)

  if (gallery) {
    try {
      await cloudinary.uploader.destroy(gallery.public_id)
      await Gallery.destroy({ where: { id: req.params.id } })

      json(res, 200, "Gallery Deleted")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Gallery id")
  }
}

exports.changeFloatingIcon = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await cloudinary.uploader.destroy(card.floating_public_id)
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/icons",
        resource_type: "image",
      })
      await Card.update(
        {
          floating_icon: result.secure_url,
          floating_public_id: result.public_id,
        },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Floating icon Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.changeNumber = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { number: req.body.number },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Number Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.changeFloatingBg = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { floating_bg: req.body.floating_bg },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Floating BG Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.addReview = async (req, res) => {
  const card = await Card.findByPk(req.body.cid)

  if (card) {
    try {
      await Reviews.create({
        uid: card.uid,
        cid: req.body.cid,
        name: req.body.name,
        rating: req.body.rating,
        description: req.body.description,
        isApproved: req.body.isApproved,
      })

      json(res, 201, "Review Added")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.deleteReview = async (req, res) => {
  let review = await Helpers.findReviewById(req.params.id)

  if (review) {
    try {
      await Reviews.destroy({ where: { id: req.params.id } })
      json(res, 200, "Review Deleted")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Review id")
  }
}

exports.deleteIcon = async (req, res) => {
  let icon = await Helpers.findIconById(req.params.id)

  if (icon) {
    try {
      await cloudinary.uploader.destroy(icon.public_id)
      await Icons.destroy({ where: { id: req.params.id } })
      json(res, 200, "Icon Deleted")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Icon id")
  }
}

exports.updateReview = async (req, res) => {
  let review = await Helpers.findReviewById(req.body.id)
  if (review) {
    try {
      await Reviews.update(
        {
          name: req.body.name,
          rating: req.body.rating,
          description: req.body.description,
        },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Review Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Review")
  }
}

exports.updateReviewStatus = async (req, res) => {
  let review = await Helpers.findReviewById(req.params.id)
  if (review) {
    try {
      await Reviews.update(
        {
          isApproved: !review.isApproved,
        },
        { where: { id: req.params.id } },
      )

      json(res, 200, "Review Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Review")
  }
}

exports.addIcon = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/icons",
        resource_type: "image",
      })

      const iconCount = await Icons.count({ where: { cid: req.body.id } })
      await Icons.create({
        cid: req.body.id,
        type: req.body.type,
        icon: result.secure_url,
        public_id: result.public_id,
        priority: parseInt(iconCount + 1),
      })

      json(res, 201, "Icon Added")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateIcon = async (req, res) => {
  let icon = await Helpers.findIconById(req.body.id)

  if (icon) {
    try {
      await cloudinary.uploader.destroy(icon.public_id)
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/icons",
        resource_type: "image",
      })
      await Icons.update(
        {
          icon: result.secure_url,
          public_id: result.public_id,
          type: req.body.type,
        },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Icon Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateIconValue = async (req, res) => {
  let icon = await Helpers.findIconById(req.body.id)

  if (icon) {
    try {
      await Icons.update(
        { value: req.body.value },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Icon Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateIconType = async (req, res) => {
  let icon = await Helpers.findIconById(req.body.id)

  if (icon) {
    try {
      await Icons.update(
        { type: req.body.type },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Icon Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateCardView = async (req, res) => {
  let cardData = await Card.findOne({ where: { URL_title: req.params.title } })
  if (cardData) {
    try {
      await Card.update(
        { views: parseInt(cardData.views) + 1 },
        { where: { id: cardData.id } },
      )

      await CardView.create({
        cid: cardData.id,
        countryName: req.body.country
      })

      json(res, 200, "View Updated",viewByCountryCount)
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}



exports.getCardViewByCountryCount = async (req, res) => {
  let cardData = await Card.findOne({ where: { URL_title: req.params.title } })
  if (cardData) {
    try {
      const viewByCountryCount = await CardView.findAll({
        attributes: [
          ['countryName', 'country'],
          [Card.sequelize.fn('COUNT', Card.sequelize.col('cid')), 'views'],
        ],
        group: ['countryName'],
        raw: true,
      });

      json(res, 200, "View Fetched",viewByCountryCount)
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card Title")
  }
}


exports.updateCardBusinessLogo = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)
  if (card) {
    try {
      await cloudinary.uploader.destroy(card.logo_public_id)
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/logo",
        resource_type: "image",
      })
      await Card.update(
        { logo: result.secure_url, logo_public_id: result.public_id },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Logo Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateCardBgImage = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)
  if (card) {
    try {
      if (card.bg_image_public_id) {
        await cloudinary.uploader.destroy(card.bg_image_public_id)
      }
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/background",
        resource_type: "image",
      })
      await Card.update(
        { bg_image: result.secure_url, bg_image_public_id: result.public_id },
        { where: { id: req.body.id } },
      )
      json(res, 200, "BG Image Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card")
  }
}

exports.updateCardBusinessCoverPhoto = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await cloudinary.uploader.destroy(card.cover_public_id)
      const result = await cloudinary.uploader.upload(req.body.image, {
        folder: "wazcard/cover",
        resource_type: "image",
      })
      await Card.update(
        { cover_photo: result.secure_url, cover_public_id: result.public_id },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Cover Photo Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateBusinessName = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)
  // const URL_title = `${req.body.title}.${card.URL_title.slice(
  //   card.URL_title.lastIndexOf(".") + 1,
  // )}`

  if (card) {
    try {
      await Card.update(
        { title: req.body.title },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Title Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateBusinessSlogan = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { slogan: req.body.slogan },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Slogan Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateTextColor = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { text_color: req.body.text_color },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Text Color Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateCoverColor = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { cover_color: req.body.cover_color },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Cover Color Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateBackgroundColor = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { bg_color: req.body.bg_color },
        { where: { id: req.body.id } },
      )
      json(res, 200, "Background Color Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateHoursColor = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { hours_bg: req.body.hours_bg },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Hours Color Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateReviewColor = async (req, res) => {
  let card = await Helpers.findCardById(req.body.id)

  if (card) {
    try {
      await Card.update(
        { reviews_bg: req.body.reviews_bg },
        { where: { id: req.body.id } },
      )

      json(res, 200, "Review Color Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.updateLanguage = async (req, res) => {
  let card = await Helpers.findCardById(req.body.cid)

  if (card) {
    try {
      await Card.update(
        { lang_id: req.body.id },
        { where: { id: req.body.cid } },
      )

      json(res, 200, "Language Updated")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.cardLike = async (req, res) => {
  let card = await Card.findOne({ where: { URL_title: req.body.URL_title } })

  if (card) {
    try {
      let likeCount = parseInt(card.likes)
      if (req.body.status == true) {
        await Card.update(
          { likes: likeCount + 1 },
          { where: { URL_title: req.body.URL_title } },
        )
      } else {
        await Card.update(
          { likes: likeCount <= 0 ? 0 : likeCount - 1 },
          { where: { URL_title: req.body.URL_title } },
        )
      }
      json(res, 200, "OK")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card")
  }
}

exports.swapIconPriority = async (req, res) => {
  let card = await Card.findOne({ where: { id: req.body.cid } })

  if (card) {
    try {
      let fromCardIcon = await Helpers.findIconByCardIdAndPriority(
        req.body.cid,
        req.body.fromID,
      )

      let toCardIcon = await Helpers.findIconByCardIdAndPriority(
        req.body.cid,
        req.body.toID,
      )

      await Icons.update(
        {
          priority: toCardIcon.priority,
        },
        { where: { id: fromCardIcon.id } },
      )

      await Icons.update(
        {
          priority: fromCardIcon.priority,
        },
        { where: { id: toCardIcon.id } },
      )

      json(res, 200, "Icons Sorted")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}

exports.swapGalleryPriority = async (req, res) => {
  let card = await Card.findOne({ where: { id: req.body.cid } })

  if (card) {
    try {
      let fromGallary = await Helpers.findGalleryByCardIdAndPriority(
        req.body.cid,
        req.body.fromID,
      )

      let toGallary = await Helpers.findGalleryByCardIdAndPriority(
        req.body.cid,
        req.body.toID,
      )

      await Gallery.update(
        {
          priority: toGallary.priority,
        },
        { where: { id: fromGallary.id } },
      )

      await Gallery.update(
        {
          priority: fromGallary.priority,
        },
        { where: { id: toGallary.id } },
      )

      json(res, 200, "Gallery Sorted")
    } catch (error) {
      json(res, 500, error.message)
    }
  } else {
    json(res, 404, "Invalid Card id")
  }
}
