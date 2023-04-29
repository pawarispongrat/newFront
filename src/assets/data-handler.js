const API_HOST = "http://localhost:8080"
const API_ANNOUCEMENTS = `${API_HOST}/api/announcements`

async function getAnnouncement() {
    try {
        const res = await fetch(`${API_ANNOUCEMENTS}`)
        if (res.ok) return res.json()
        else throw new Error('Error, data is error!')
    } catch (error) { console.log(error) }
}
async function getAnnouncementById(id) {
    try {
        const res = await fetch(`${API_ANNOUCEMENTS}/${id}`)
        if (res.ok) return res.json()
        else throw new Error('Error, data is error!')
    } catch (error) { console.log(error) }
}

export { getAnnouncement,getAnnouncementById }