var jwt = require("jsonwebtoken");
require("dotenv").config();
const db_office = require("../config/db");
const secret = process.env.SECRET_KEY;

const BookDirector = async (req, res) => {
  try {
    const query = await db_office("book_send_person as bs")
      .leftJoin("book_index as bi", "bs.BOOK_ID", "bi.ID")
      .where("bs.HR_PERSON_ID", "372")
      .select(
        "bs.ID as book_send_person_id",
        "bs.BOOK_ID",
        "bs.HR_PERSON_ID",
        "bs.SEND_BY_NAME",
        "bi.BOOK_NAME",
        "bi.BOOK_DETAIL",
        "bi.BOOK_DATE",
        "bi.DATE_TIME_SAVE",
        "bi.BOOK_SECRET_ID"
      )
      .orderBy("BOOK_DATE", "desc");

    return res.json({ status: 200, results: query });
  } catch (error) {
    return res.json({ status: 500, err: error });
  }
};
const BookIndexSendLeader = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const query = await db_office("book_index_send_leader as bl")
      .leftJoin("book_index as b", "bl.BOOK_ID", "b.ID")
      .leftJoin("book_index_img as bi", "bi.BOOK_ID", "b.ID")
      .leftJoin("book_urgent as bu", "b.BOOK_URGENT_ID", "bu.URGENT_ID")
      .where("bl.SEND_STATUS", "SEND")
      .andWhere("bl.SEND_LD_HR_ID", id)
      .orderBy("bl.SEND_LD_DATE_TIME", "desc")
      .select(
        "b.BOOK_NAME",
        "b.BOOK_DETAIL",
        "b.BOOK_URGENT_ID",
        "bu.URGENT_NAME",
        "bl.*",
        "bi.ID as BOOK_IMAGE_ID",
        "bi.FILE_TYPE"
      );
    return res.json({ status: 200, results: query });
  } catch (error) {
    return res.json({ status: 500, result: error.message });
  }
};

module.exports = { BookDirector, BookIndexSendLeader };
