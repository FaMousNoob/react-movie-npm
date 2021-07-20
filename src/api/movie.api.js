import axios from "axios"

export const getMovieListApi = () => {
    return axios({
        method: 'GET',
        url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      })
}